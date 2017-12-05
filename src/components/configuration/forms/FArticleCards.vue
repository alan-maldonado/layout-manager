<template>
  <form class="article-list">
    <ul class="nav nav-tabs">
      <li
        v-for="(section, index) in value.sections"
        :class="{ active: activeIndex === index }"
        :key="index"
      >
        <a @click.prevent="activeIndex = index">{{ section.title || 'Untitled' }} <span v-if="tabError[index]" class="glyphicon glyphicon-error glyphicon-exclamation-sign pull-right"/></a>
      </li>
    </ul>
    <div class="tab-content">
      <div
        v-for="(section, index) in value.sections"
        :key="index" class="tab-pane fade"
        :class="{ active: activeIndex === index, in: activeIndex === index }"
      >
        <div class="form-group col-xs-12" :class="{ 'has-error': error[`title${index}`] }">
          <label>Title</label>
          <input class="form-control" v-model="section.title">
          <span v-if="error[`title${index}`]" class="help-block">{{ error[`title${index}`] }}</span>
        </div>
        <article-check-options
          v-model="value.sections[index]" :submitted="submitted"
          display-hero :display-time="false"
        />
        <search-criteria
          v-model="value.sections[index]" :submitted="submitted"
          ref="searchCriteria"
        />
      </div>
    </div>
  </form>
</template>

<script>
import _ from 'lodash'
import { formMixin } from './mixins'
export default {
  mixins: [formMixin],
  data () {
    return {
      activeIndex: 0
    }
  },
  computed: {
    error () {
      const errors = { }

      if (!this.submitted) { return errors }
      if (!this.value.sections) { return errors }

      errors.title0 = this.validateRequired(this.value.sections[0].title, 'Title')
      errors.searchCriteria0 = this.validateChild(this.$refs.searchCriteria[0], 'Search Criteria 0')
      errors.title1 = this.validateRequired(this.value.sections[1].title, 'Title')
      errors.searchCriteria1 = this.validateChild(this.$refs.searchCriteria[1], 'Search Criteria 1')
      errors.title2 = this.validateRequired(this.value.sections[2].title, 'Title')
      errors.searchCriteria2 = this.validateChild(this.$refs.searchCriteria[2], 'Search Criteria 2')

      return _.pickBy(errors)
    },
    tabError () {
      const error = this.error
      return [
        error.title0 || error.searchCriteria0,
        error.title1 || error.searchCriteria1,
        error.title2 || error.searchCriteria2
      ]
    }
  }
}
</script>

<style scoped>
.article-list::after {
  clear: both;
  content: '';
  display: block;
}

.glyphicon-error {
  color: #dd4b39;
}
</style>
