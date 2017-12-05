<template>
  <div class="form-group col-xs-8">
    <label class="checkbox-inline" v-if="displayHero">
      <input type="checkbox" class="field-inline" v-model="value.showHero" > Show Hero
    </label>
    <label class="checkbox-inline" v-if="displayCategory">
      <input type="checkbox" class="field-inline" v-model="value.showCategory" > Show Category
    </label>
    <label class="checkbox-inline" v-if="displayDescription">
      <input type="checkbox" class="field-inline" v-model="value.showDescription" > Show Dek
    </label>
    <label class="checkbox-inline" v-if="displayTime">
      <input type="checkbox" class="field-inline" v-model="value.showTime" > Show Time
    </label>
    <label class="checkbox-inline" v-if="displayMulti">
      <input type="checkbox" class="field-inline" v-model="value.showMulti" > Show Smaller
    </label>
    <label class="checkbox-inline" v-if="displaySource">
      <input type="checkbox" class="field-inline" v-model="value.showSource" > Show Source
    </label>
  </div>
</template>

<script>
import _ from 'lodash'
import { formMixin } from '@/components/configuration/forms/mixins'
export default {
  mixins: [formMixin],
  props: {
    displayCategory: {
      type: Boolean,
      default: true
    },
    displayDescription: {
      type: Boolean,
      default: true
    },
    displayTime: {
      type: Boolean,
      default: true
    },
    displayMulti: {
      type: Boolean,
      default: false
    },
    displaySource: {
      type: Boolean,
      default: false
    },
    displayHero: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    error () {
      const error = {}
      if (!this.submitted) { return error }

      return _.pickBy(error)
    }
  }
}
</script>
