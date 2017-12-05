<template>
  <form>
    <div class="form-group col-md-12" :class="{ 'has-error': error.imageUrl }">
      <label>Image URL Override</label>
      <div class="input-group">
        <span class="input-group-addon"><span class="glyphicon glyphicon-link"/></span>
        <input type="text" class="form-control"
               v-model="value.imageUrl"
        >
      </div>
      <span v-if="error.imageUrl" class="help-block">{{ error.imageUrl }}</span>
    </div>
    <responsive-images-fields v-model="value" :submitted="submitted" ref="responsiveImages" />
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
      error.imageUrl = this.validateUrl(this.value.imageUrl, 'Image URL Override')
      error.responsiveImages = this.validateChild(this.$refs.responsiveImages, 'Responsive Images')

      return _.pickBy(error)
    }
  }
}
</script>
