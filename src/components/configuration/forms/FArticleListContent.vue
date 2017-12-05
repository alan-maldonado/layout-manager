<template>
  <form class="clearfix">
    <article-check-options v-model="value" :submitted="submitted" />
    <div class="form-group col-md-6" :class="{ 'has-error': error.size }">
      <label>Size</label>
      <input
        type="number" class="form-control"
        step="1" min="1" v-model="value.size">
      <span v-if="error.size" class="help-block">{{ error.size }}</span>
    </div>
    <ad-position v-model="value" />
    <article-pills-meta-position v-model="value" :submitted="submitted" />
    <div class="form-group col-md-12">
      <label class="control-label">
        <input type="checkbox" class="field-inline" v-model="value.fetchMore" > Fetch More option
      </label>
    </div>
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
