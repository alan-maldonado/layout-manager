<template>
  <div class="form-group">
    <div class="form-group col-md-12">
      <label>Responsive Images</label>
    </div>
    <div class="clearfix">
      <div class="form-group col-md-6" :class="{ 'has-error': error.small }">
        <label>Small</label>
        <div class="input-group">
          <span class="input-group-addon"><span class="glyphicon glyphicon-link"/></span>
          <input
            type="url" class="form-control" placeholder="Small Image URL"
            v-model="value.small" >
        </div>
        <span v-if="error.small" class="help-block">{{ error.small }}</span>
      </div>
      <div class="form-group col-md-6" :class="{ 'has-error': error.medium }">
        <label>Medium</label>
        <div class="input-group">
          <span class="input-group-addon"><span class="glyphicon glyphicon-link"/></span>
          <input
            type="url" class="form-control" placeholder="Medium Image URL"
            v-model="value.medium" >
        </div>
        <span v-if="error.medium" class="help-block">{{ error.medium }}</span>
      </div>
    </div>
    <div class="clearfix">
      <div class="form-group col-md-6" :class="{ 'has-error': error.large }">
        <label>Large</label>
        <div class="input-group">
          <span class="input-group-addon"><span class="glyphicon glyphicon-link"/></span>
          <input
            type="url" class="form-control" placeholder="Large Image URL"
            v-model="value.large" >
        </div>
        <span v-if="error.large" class="help-block">{{ error.large }}</span>
      </div>
      <div class="form-group col-md-6" :class="{ 'has-error': error.extraLarge }">
        <label>Extra Large</label>
        <div class="input-group">
          <span class="input-group-addon"><span class="glyphicon glyphicon-link"/></span>
          <input
            type="url" class="form-control" placeholder="Extra Large Image URL"
            v-model="value.extraLarge" >
        </div>
        <span v-if="error.extraLarge" class="help-block">{{ error.extraLarge }}</span>
      </div>
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
      error.small = this.validateUrl(this.value.small, 'Small Image URL')
      error.medium = this.validateUrl(this.value.medium, 'Medium Image URL')
      error.large = this.validateUrl(this.value.large, 'Large Image URL')
      error.extraLarge = this.validateUrl(this.value.extraLarge, 'Extra Large Image URL')

      return _.pickBy(error)
    }
  }
}
</script>
