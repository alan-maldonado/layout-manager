<template>
  <form>
    <div class="form-group col-md-12" :class="{'has-error': error.title }">
      <label>Title</label>
      <input type="text" class="form-control" v-model="value.title">
      <span v-if="error.title" class="help-block">{{ error.title }}</span>
    </div>
    <collection-items
      v-model="value.items"
      :submitted="submitted"
      :item-model="itemModel"
      component-form-name="f-personality-event-item"
    >
      <label>Events</label>
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
        title: 'Personality Event',
        description: '',
        url: '',
        imageUrl: '',
        date: '',
        locationName: '',
        locationUrl: '',
        buyTicketsUrl: '',
        websiteUrl: '',
        isValid: false
      }
    }
  },
  computed: {
    error () {
      const error = {}

      if (!this.submitted) { return error }
      error.title = this.validateRequired(this.value.title, 'Title')
      error.items = this.validateChildren(this.value.items, 'Personality Events')
      return _.pickBy(error)
    }
  }
}
</script>
