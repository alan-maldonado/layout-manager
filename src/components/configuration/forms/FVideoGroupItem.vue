<template>
  <div class="col-md-12 box" :class="{ 'box-default': value.isValid, 'box-danger': !value.isValid }">
    <div class="video-wrapper">
      <div class="row">
        <div class="form-group col-md-12" :class="{ 'has-error': error.title }">
          <label>Title</label>
          <input
            type="text" class="form-control"
            v-model="value.title"
          >
          <span v-if="error.title" class="help-block">{{ error.title }}</span>
        </div>
      </div>
      <div class="row">
        <div class="form-group col-md-6" :class="{ 'has-error': error.url }">
          <label>URL</label>
          <input
            type="text" class="form-control"
            v-model="value.url"
          >
          <span v-if="error.url" class="help-block">{{ error.url }}</span>
        </div>
        <div class="form-group col-md-6" :class="{ 'has-error': error.duration }">
          <label>Duration</label>
          <input type="text" class="form-control" v-model="value.duration">
          <span v-if="error.duration" class="help-block">{{ error.duration }}</span>
        </div>
      </div>
      <div class="row">
        <div class="form-group col-md-6" :class="{ 'has-error': error.thumbnailUrl }">
          <label>Thumbnail URL</label>
          <input type="text" class="form-control" v-model="value.thumbnailUrl">
          <span v-if="error.thumbnailUrl" class="help-block">{{ error.thumbnailUrl }}</span>
        </div>
        <div class="form-group col-md-6" :class="{ 'has-error': error.publicationDate }">
          <label>Publication Date</label>
          <input type="date" class="form-control" v-model="value.publicationDate">
          <span v-if="error.publicationDate" class="help-block">{{ error.publicationDate }}</span>
        </div>
      </div>
      <div class="row">
        <div class="form-group col-md-6" :class="{ 'has-error': error.categoryUrl }">
          <label>Category URL</label>
          <input type="text" class="form-control" v-model="value.categoryUrl">
          <span v-if="error.categoryUrl" class="help-block">{{ error.categoryUrl }}</span>
        </div>
        <div class="form-group col-md-6">
          <label>Category Name</label>
          <input type="text" class="form-control" v-model="value.categoryName">
        </div>
      </div>
      <div class="row">
        <div class="form-group col-md-3">
          <label>Is Episode?</label>
          <input type="checkbox" v-model="value.isEpisode">
        </div>
        <div class="form-group col-md-3">
          <label>Is Locked?</label>
          <input type="checkbox" v-model="value.isLocked">
        </div>
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
      error.duration = this.validateRequired(this.value.duration, 'Duration')
      error.publicationDate = this.validateRequired(this.value.publicationDate, 'Publication date')
      error.thumbnailUrl = this.validateUrl(this.value.thumbnailUrl, 'URL')
      error.categoryUrl = this.validateUrl(this.value.categoryUrl, 'URL')

      this.value.isValid = _.isEmpty(_.pickBy(error))
      this.$emit('input', this.value)

      return _.pickBy(error)
    }
  }
}
</script>
