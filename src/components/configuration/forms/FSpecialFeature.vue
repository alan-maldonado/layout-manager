<template>
  <form>
    <div class="form-group col-md-12" :class="{'has-error': error.title }">
      <label>Title</label>
      <input type="text" class="form-control" v-model="value.title" >
      <span v-if="error.title" class="help-block">{{ error.title }}</span>
    </div>
    <div class="form-group col-md-12" :class="{'has-error': error.imageUrl }">
      <label>Image URL</label>
      <div class="input-group">
        <span class="input-group-addon"><span class="glyphicon glyphicon-link"/></span>
        <input type="url" class="form-control" v-model="value.imageUrl" >
      </div>
      <span v-if="error.imageUrl" class="help-block">{{ error.imageUrl }}</span>
    </div>
    <div class="form-group col-md-12" :class="{'has-error': error.content }">
      <label>Content</label>
      <textarea rows="3" class="form-control" v-model="value.content" />
      <span v-if="error.content" class="help-block">{{ error.content }}</span>
    </div>
    <br >
    <div class="form-group col-md-12" :class="{'has-error': error.buttonLabel }">
      <label>Show Link</label>
      <input type="checkbox" class="field-inline" v-model="value.showLink" >
      <span v-if="error.showLink" class="help-block">{{ error.showLink }}</span>
    </div>
    <div class="col-md-12" v-if="value.showLink">
      <div class="form-group col-md-6" :class="{'has-error': error.linkDescription }">
        <label>Link description</label>
        <input type="text" class="form-control" v-model="value.linkDescription" >
        <span v-if="error.linkDescription" class="help-block">{{ error.linkDescription }}</span>
      </div>
      <div class="form-group col-md-6" :class="{'has-error': error.linkUrl }">
        <label>Link URL</label>
        <div class="input-group">
          <span class="input-group-addon"><span class="glyphicon glyphicon-link"/></span>
          <input type="url" class="form-control" v-model="value.linkUrl" >
        </div>
        <span v-if="error.linkUrl" class="help-block">{{ error.linkUrl }}</span>
      </div>
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
      error.imageUrl = this.validateRequiredUrl(this.value.imageUrl, 'Image URL')
      error.content = this.validateRequired(this.value.content, 'Content')

      if (this.value.showLink) {
        error.linkDescription = this.validateRequired(this.value.linkDescription, 'Link Description')
        error.linkUrl = this.validateRequiredUrl(this.value.linkUrl, 'Link URL')
      }
      return _.pickBy(error)
    }
  }
}
</script>
