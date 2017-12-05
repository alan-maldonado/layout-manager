<template>
  <div class="clearfix">
    <div class="form-group col-md-12" :class="{'has-error': error.title }">
      <label>Title</label>
      <input type="text" class="form-control" v-model="value.title" >
      <span v-if="error.title" class="help-block">{{ error.title }}</span>
    </div>
    <div class="form-group col-md-12" :class="{'has-error': error.url }">
      <label>Article URL</label>
      <input type="text" class="form-control" v-model="value.url" >
      <span v-if="error.url" class="help-block">{{ error.url }}</span>
    </div>
    <div class="form-group col-md-4" :class="{'has-error': error.duration }">
      <label>Duration</label>
      <input type="text" class="form-control" v-model="value.duration" >
      <span v-if="error.duration" class="help-block">{{ error.duration }}</span>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { formMixin } from './mixins'

export default {
  mixins: [formMixin],
  data () {
    return {
      isEmpty: _.isEmpty,
      relatedArticle: {
        duration: '',
        title: '',
        url: '',
        isValid: false
      }
    }
  },
  computed: {
    error () {
      const error = {}
      if (!this.submitted) { return error }
      error.title = this.validateRequired(this.value.title, 'Title')
      error.url = this.validateRequired(this.value.url, 'Article URL')

      this.value.isValid = _.isEmpty(_.pickBy(error))
      this.$emit('input', this.value)

      return _.pickBy(error)
    }
  }
}
</script>
