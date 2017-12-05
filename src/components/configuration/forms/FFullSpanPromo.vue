<template>
  <form class="clearfix">
    <collection-items
      v-model="value.slides"
      :submitted="submitted"
      :item-model="itemModel"
      component-form-name="f-full-span-promo-item"
    >
      <label>Slides</label>
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
        showTitle: '',
        linkUrl: '',
        linkDescription: '',
        align: 'center',
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

      error.images = this.validateChildren(this.value.slides, 'Slides')
      return _.pickBy(error)
    }
  }
}
</script>
