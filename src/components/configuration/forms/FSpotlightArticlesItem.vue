<template>
  <search-criteria-fixed-articles v-model="value" :submitted="submitted" :slot-is-valid="isEmpty(error)">
    <div class="form-group col-md-8" :class="{'has-error': error.kicker }">
      <label>Kicker</label>
      <input type="text" class="form-control" v-model="value.kicker" >
      <span v-if="error.kicker" class="help-block">{{ error.kicker }}</span>
    </div>
    <div class="clearfix" />
    <responsive-images-fields v-model="value" :submitted="submitted" ref="responsiveImages" />
    <collection-items
      v-model="value.relatedArticles"
      :submitted="submitted"
      :item-model="relatedArticle"
      :compacted="true"
      component-form-name="f-spotlight-articles-related-item"
    >
      <label>Related Articles</label>
    </collection-items>
  </search-criteria-fixed-articles>
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

      error.responsiveImages = this.validateChild(this.$refs.responsiveImages, 'Responsive Images')
      error.relatedArticles = this.validateChildren(this.value.relatedArticles, 'Related Articles are not valid')

      this.value.isValid = _.isEmpty(_.pickBy(error))
      this.$emit('input', this.value)

      return _.pickBy(error)
    }
  }
}
</script>
