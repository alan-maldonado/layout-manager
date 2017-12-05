<template>
  <form>
    <div class="form-group col-md-6" :class="{ 'has-error': error.title }">
      <label>Title</label>
      <input type="text" class="form-control" v-model="value.title">
      <span v-if="error.title" class="help-block">{{ error.title }}</span>
    </div>
    <div class="form-group col-md-6" :class="{ 'has-error': error.imagesToShow }">
      <label>Images to show</label>
      <input type="number" class="form-control" min="1"
             v-model="value.imagesToShow"
      >
      <span v-if="error.imagesToShow" class="help-block">{{ error.imagesToShow }}</span>
    </div>
    <collection-items
      v-model="value.images"
      :submitted="submitted"
      :item-model="itemModel"
      component-form-name="f-image-gallery-item"
    >
      <label>Images</label>
    </collection-items>
  </form>
</template>

<script>
import _ from 'lodash'
import { formMixin } from './mixins'

export default {
  mixins: [formMixin],
  data () {
    return {
      itemModel: {
        title: '',
        show: true,
        imageUrl: '',
        small: '',
        medium: '',
        large: '',
        extraLarge: '',
        isValid: false
      }
    }
  },

  computed: {
    error () {
      const error = {}
      if (!this.submitted) { return error }

      error.title = this.validateRequired(this.value.title, 'Title')
      error.imagesToShow = this.validateRequired(this.value.imagesToShow, 'Images to show')
      error.images = this.validateChildren(this.value.images, 'Images')
      return _.pickBy(error)
    }
  }
}
</script>
