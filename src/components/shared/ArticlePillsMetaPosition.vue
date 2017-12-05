<template lang="html">
  <div class="form-group clearfix">
    <div class="form-group col-md-6" :class="{ 'has-error': error.metaPosition }">
      <label>Meta Position</label>
      <select class="form-control" v-model="value.metaPosition">
        <option v-for="option in optionsMeta" :value="option.value" :key="option.value">
          {{ option.text }}
        </option>
      </select>
      <span v-if="error.metaPosition" class="help-block">{{ error.metaPosition }}</span>
    </div>
    <div class="form-group col-md-6" :class="{ 'has-error': error.pillsPosition }">
      <label>Pills Position</label>
      <select class="form-control" v-model="value.pillsPosition">
        <option v-for="option in optionsPills" :value="option.value" :key="option.value">
          {{ option.text }}
        </option>
      </select>
      <span v-if="error.pillsPosition" class="help-block">{{ error.pillsPosition }}</span>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { formMixin } from '@/components/configuration/forms/mixins'
export default {
  mixins: [formMixin],
  computed: {
    error () {
      const error = {}
      if (!this.submitted) { return error }

      return _.pickBy(error)
    },
    optionsMeta () {
      return [
        { text: 'Pick one', value: '' },
        { text: 'Header', value: 'header' },
        { text: 'Footer', value: 'footer' }
      ]
    },
    optionsPills () {
      return [
        { text: 'Pick one', value: '' },
        { text: 'Header', value: 'header' },
        { text: 'Image', value: 'image' },
        { text: 'Footer', value: 'footer' }
      ]
    }
  }
}
</script>
