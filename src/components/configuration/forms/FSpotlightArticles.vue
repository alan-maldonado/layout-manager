<template>
  <form>
    <div class="form-group col-xs-8">
      <label class="checkbox-inline">
        <input type="checkbox" class="field-inline" v-model="value.showHero" > Show Hero
      </label>
    </div>
    <collection-items
      v-model="value.items"
      :submitted="submitted"
      :item-model="itemModel"
      label-property="articleUrl"
      component-form-name="f-spotlight-articles-item"
    >
      <label>Articles</label>
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
        articleUrl: '',
        kicker: '',
        title: '',
        show: true,
        isBreaking: false,
        imageUrl: '',
        small: '',
        medium: '',
        large: '',
        extraLarge: '',
        relatedArticles: [],
        isValid: false
      }
    }
  },
  computed: {
    error () {
      const error = {}
      if (!this.submitted) { return error }

      error.items = this.validateChildren(this.value.items, 'Articles are not valid')
      return _.pickBy(error)
    }
  }
}
</script>
