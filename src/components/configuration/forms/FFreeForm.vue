<template>
  <div class="col-md-12">
    <div class="form-group col-md-12" :class="{'has-error': error.title }">
      <label>Title</label>
      <input type="text" class="form-control" v-model="value.title">
      <span v-if="error.title" class="help-block">{{ error.title }}</span>
    </div>
    <div class="form-group col-md-12" :class="{'has-error': error.content }">
      <label>Content</label>
      <simple-mark-down-editor :value="value.content" v-model="value.content"/>
      <span v-if="error.content" class="help-block">{{ error.content }}</span>
    </div>
  </div>
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
      error.content = this.validateRequired(this.value.content, 'Content')

      return _.pickBy(error)
    }
  }
}
</script>
