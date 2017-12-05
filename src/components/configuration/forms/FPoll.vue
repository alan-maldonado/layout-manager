<template>
  <form>
    <div class="form-group col-md-12" :class="{ 'has-error': error.id }">
      <label>ID</label>
      <input type="text" class="form-control" v-model="value.id">
      <span v-if="error.id" class="help-block">{{ error.id }}</span>
    </div>
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

      error.id = this.validateRequired(this.value.id, 'ID')
      return _.pickBy(error)
    }
  }
}
</script>
