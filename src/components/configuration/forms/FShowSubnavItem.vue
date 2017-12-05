<template>
  <div class="col-md-12 box" :class="{ 'box-default': value.isValid, 'box-danger': !value.isValid }">
    <div>
      <div class="form-group col-md-12" :class="{ 'has-error': error.title }">
        <label>Title</label>
        <input
          type="text" class="form-control"
          v-model="value.title"
        >
        <span v-if="error.title" class="help-block">{{ error.title }}</span>
      </div>
      <div class="form-group col-md-12" :class="{ 'has-error': error.url }">
        <label>URL</label>
        <div class="input-group">
          <span class="input-group-addon"><span class="glyphicon glyphicon-link"/></span>
          <input type="text" class="form-control"
                 v-model="value.url"
          >
        </div>
        <span v-if="error.url" class="help-block">{{ error.url }}</span>
      </div>
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
      error.url = this.validateRequiredUrl(this.value.url, 'URL')

      this.value.isValid = _.isEmpty(_.pickBy(error))
      this.$emit('input', this.value)

      return _.pickBy(error)
    }
  }
}
</script>
