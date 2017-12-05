<template>
  <form>
    <div class="clearfix">
      <div class="form-group col-md-4" :class="{ 'has-error': error.videoId }">
        <label>Video Id</label>
        <input type="text" class="form-control" v-model="value.videoId">
        <span v-if="error.videoId" class="help-block">{{ error.videoId }}</span>
      </div>
      <div class="form-group col-md-8">
        <label>Title</label>
        <input type="text" class="form-control" v-model="value.title">
      </div>
      <div class="form-group col-md-12">
        <label>Description</label>
        <textarea rows="5" class="form-control" v-model="value.description"/>
      </div>
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

      error.videoId = this.validateRequired(this.value.videoId, 'Video Id')
      return _.pickBy(error)
    }
  }
}
</script>
