<template>
  <form class="clearfix">
    <div class="form-group col-md-6" :class="{ 'has-error': error.title }">
      <label>Title</label>
      <input type="text" class="form-control" v-model="value.title">
      <span v-if="error.title" class="help-block">{{ error.title }}</span>
    </div>
    <div class="form-group col-md-12">
      <label class="control-label">
        <input type="checkbox" class="field-inline" v-model="value.fetchMore" > Fetch More option
      </label>
    </div>
    <article-check-options v-model="value" :display-description="false" :submitted="submitted" />
    <div class="clearfix" />
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
      error.searchCriteria = this.validateChild(this.$refs.searchCriteria, 'Search Criteria')
      return _.pickBy(error)
    }
  }
}
</script>
