<template>
  <div class="col-md-12 box" :class="{ 'box-default': value.isValid, 'box-danger': !value.isValid }">
    <div class="event-wrapper">
      <div class="form-group col-md-6" :class="{ 'has-error': error.title }">
        <label>Headline</label>
        <input
          type="text" class="form-control"
          v-model="value.title"
        >
        <span v-if="error.title" class="help-block">{{ error.title }}</span>
      </div>
      <div class="form-group col-md-6" :class="{ 'has-error': error.showTitle }">
        <label>Show Title</label>
        <input
          type="text" class="form-control"
          v-model="value.showTitle"
        >
        <span v-if="error.showTitle" class="help-block">{{ error.showTitle }}</span>
      </div>
      <div class="clearfix" />
      <div class="form-group col-md-6" :class="{ 'has-error': error.imageUrl }">
        <label>Image URL</label>
        <div class="input-group">
          <span class="input-group-addon"><span class="glyphicon glyphicon-link"/></span>
          <input type="text" class="form-control"
                 v-model="value.imageUrl"
          >
        </div>
        <span v-if="error.imageUrl" class="help-block">{{ error.imageUrl }}</span>
      </div>
      <div class="form-group col-md-6" :class="{ 'has-error': error.align }">
        <label>Alignment</label>
        <select class="form-control" v-model="value.align">
          <option v-for="(option, index) in options" :value="option.value" :key="index">
            {{ option.text }}
          </option>
        </select>
        <span v-if="error.align" class="help-block">{{ error.align }}</span>
      </div>
      <div class="clearfix" />
      <responsive-images-fields v-model="value" :submitted="submitted" ref="responsiveImages" />
      <div class="form-group col-md-6" :class="{'has-error': error.linkDescription }">
        <label>Link Description</label>
        <input type="text" class="form-control" v-model="value.linkDescription">
        <span v-if="error.linkDescription" class="help-block">{{ error.linkDescription }}</span>
      </div>
      <div class="form-group col-md-6" :class="{'has-error': error.linkUrl }">
        <label>Link URL</label>
        <div class="input-group">
          <span class="input-group-addon"><span class="glyphicon glyphicon-link"/></span>
          <input
            type="url" class="form-control"
            :disabled="!value.linkDescription" v-model="value.linkUrl">
        </div>
        <span v-if="error.linkUrl" class="help-block">{{ error.linkUrl }}</span>
      </div>
      <div class="clearfix" />
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
      error.title = this.validateRequired(this.value.title, 'Headline')
      error.showTitle = this.validateRequired(this.value.showTitle, 'Show Title')
      error.imageUrl = this.validateRequiredUrl(this.value.imageUrl, 'Image URL')
      error.responsiveImages = this.validateChild(this.$refs.responsiveImages, 'Responsive Images')
      if (this.value.linkDescription) {
        error.linkUrl = this.validateRequiredUrl(this.value.linkUrl, 'Link URL')
      }

      this.value.isValid = _.isEmpty(_.pickBy(error))
      this.$emit('input', this.value)

      return _.pickBy(error)
    },
    options () {
      return [
        { text: 'Center', value: 'center' },
        { text: 'Left', value: 'left' },
        { text: 'Right', value: 'right' }
      ]
    }
  }
}
</script>
