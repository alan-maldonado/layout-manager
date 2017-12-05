<template>
  <form>
    <div class="form-group col-md-12" :class="{ 'has-error': error.title }">
      <label>Title</label>
      <input type="text" class="form-control" v-model="value.title">
      <span v-if="error.title" class="help-block">{{ error.title }}</span>
    </div>
    <collection-items
      v-model="value.items"
      :submitted="submitted"
      :item-model="itemModel"
      component-form-name="f-merchandise-item"
    >
      <label>Merchandise Items</label>
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
        title: 'New Item',
        url: '',
        description: '',
        imageUrl: '',
        authorName: '',
        authorUrl: '',
        buttons: [
          { title: 'Buy on Amazon', url: '' },
          { title: 'Buy on Barnes & Noble', url: '' },
          { title: 'Buy on eBay', url: '' }
        ],
        isValid: false
      }
    }
  },

  computed: {
    error () {
      const error = {}
      if (!this.submitted) { return error }

      error.title = this.validateRequired(this.value.title, 'Title')
      error.items = this.validateChildren(this.value.items, 'Merchandise Items')
      return _.pickBy(error)
    }
  }
}
</script>
