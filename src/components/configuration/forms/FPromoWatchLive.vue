<template>
  <form>
    <div class="form-group col-md-12" :class="{ 'has-error': error.name }">
      <label>Title</label>
      <input type="text" class="form-control" v-model="value.name">
      <span v-if="error.name" class="help-block">{{ error.name }}</span>
    </div>
    <div class="form-group col-md-12" :class="{ 'has-error': error.url }">
      <label>URL</label>
      <div class="input-group">
        <span class="input-group-addon"><span class="glyphicon glyphicon-link"/></span>
        <input type="url" class="form-control" v-model="value.url">
      </div>
      <span v-if="error.url" class="help-block">{{ error.url }}</span>
    </div>
    <div class="form-group col-md-12" :class="{ 'has-error': error.logo }">
      <label>Logo URL</label>
      <div class="input-group">
        <span class="input-group-addon"><span class="glyphicon glyphicon-link"/></span>
        <input type="url" class="form-control" v-model="value.logo">
      </div>
      <span v-if="error.logo" class="help-block">{{ error.logo }}</span>
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

      error.name = this.validateRequired(this.value.name, 'Title')
      error.url = this.validateRequiredUrl(this.value.url, 'URL')
      error.logo = this.validateRequiredUrl(this.value.logo, 'Logo URL')
      return _.pickBy(error)
    }
  }
}
</script>
