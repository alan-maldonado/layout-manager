<template>
  <div class="form-group col-xs-4" :class="{ 'has-error': error.adPosition }">
    <label>Ad Position</label>
    <select class="form-control" v-model="value.adPosition">
      <option
        v-for="(option, index) in adOptions"
        :key="index"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
    <span v-if="error.adPosition" class="help-block">{{ error.adPosition }}</span>
  </div>
</template>

<script>
  import _ from 'lodash'
  import { formMixin } from '@/components/configuration/forms/mixins'

  export default {
    mixins: [formMixin],
    computed: {
      adOptions () {
        const size = 10
        return [
          { text: 'No ad', value: -1 },
          { text: 'First', value: 0 },
          ..._.range(1, size).map(num => ({
            text: `After article ${num}`, value: num
          }))
        ]
      },
      error () {
        const error = {}
        if (!this.submitted) { return error }

        return _.pickBy(error)
      }
    }
  }
</script>
