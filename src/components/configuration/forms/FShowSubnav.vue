<template>
  <form>
    <collection-items
      v-model="value.items"
      :submitted="submitted"
      :item-model="itemModel"
      component-form-name="f-show-subnav-item"
    >
      <label>Navs</label>
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
        url: '',
        isValid: false
      }
    }
  },

  computed: {
    error () {
      const error = {}
      if (!this.submitted) { return error }
      error.items = this.validateChildren(this.value.items, 'Subnavs')
      return _.pickBy(error)
    }
  }
}
</script>
