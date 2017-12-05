<template>
  <form>
    <div class="form-group col-md-12" :class="{ 'has-error': error.title }">
      <label>Title</label>
      <input type="text" class="form-control" v-model="value.title">
      <span v-if="error.title" class="help-block">{{ error.title }}</span>
    </div>
    <div class="form-group col-md-12" :class="{ 'has-error': error.description }">
      <label>Description</label>
      <textarea rows="5" class="form-control" v-model="value.description"/>
      <span v-if="error.description" class="help-block">{{ error.description }}</span>
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

      error.title = this.validateRequired(this.value.title, 'Title')
      error.description = this.validateRequired(this.value.description, 'Description')
      return _.pickBy(error)
    }
  }
}
</script>
