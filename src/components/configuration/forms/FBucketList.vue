<template>
  <form class="article-list">
    <div class="form-group col-md-6" :class="{ 'has-error': error.title }">
      <label>Title</label>
      <input type="text" class="form-control" v-model="value.title">
      <span v-if="error.title" class="help-block">{{ error.title }}</span>
    </div>
    <div class="form-group col-md-6" :class="{ 'has-error': error.url }">
      <label>URL</label>
      <div class="input-group">
        <span class="input-group-addon"><span class="glyphicon glyphicon-link"/></span>
        <input type="text" class="form-control"
               v-model="value.url"
        >
      </div>
      <span v-if="error.url" class="help-block">{{ error.url }}</span>
    </div>
    <search-criteria v-model="value" :submitted="submitted" ref="searchCriteria" />
  </form>
</template>

<script>
import _ from 'lodash'
import { formMixin } from './mixins'
export default {
  mixins: [formMixin],
  computed: {
    error () {
      const error = {}
      if (!this.submitted) { return error }
      error.title = this.validateRequired(this.value.title, 'Title')
      error.url = this.validateRequiredUrl(this.value.url, 'URL')
      error.searchCriteria = this.validateChild(this.$refs.searchCriteria, 'Search Criteria')
      return _.pickBy(error)
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
</style>
