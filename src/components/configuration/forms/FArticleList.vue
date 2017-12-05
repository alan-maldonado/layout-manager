<template>
  <form class="article-list">
    <article-check-options v-model="value" display-multi :submitted="submitted" />
    <ad-position v-model="value" />
    <article-pills-meta-position v-model="value" :submitted="submitted" />
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
