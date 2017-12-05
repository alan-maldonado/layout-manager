<template>
  <div class="col-md-12 box" :class="{ 'box-default': value.isValid, 'box-danger': !value.isValid }">
    <div class="row">
      <div class="form-group col-md-6" :class="{'has-error': error.title }">
        <label>
          <small>Event Title</small>
        </label>
        <input type="text" class="form-control" v-model="value.title" >
        <span v-if="error.title" class="help-block">{{ error.title }}</span>
      </div>
      <div class="form-group col-md-6" :class="{'has-error': error.url }">
        <label>
          <small>Event URL</small>
        </label>
        <div class="input-group">
          <span class="input-group-addon"><span class="glyphicon glyphicon-link"/></span>
          <input type="url" class="form-control" v-model="value.url">
        </div>
        <span v-if="error.url" class="help-block">{{ error.url }}</span>
      </div>
    </div>

    <div class="row">
      <div class="form-group col-md-12" :class="{ 'has-error': error.description }">
        <label>Description</label>
        <textarea rows="3" class="form-control"
                  v-model="value.description"
        />
        <span v-if="error.description" class="help-block">{{ error.description }}</span>
      </div>
    </div>

    <div class="row">
      <div class="form-group col-md-6" :class="{'has-error': error.imageUrl }">
        <label>
          <small>Image URL</small>
        </label>
        <div class="input-group">
          <span class="input-group-addon"><span class="glyphicon glyphicon-link"/></span>
          <input type="url" class="form-control" v-model="value.imageUrl">
        </div>
        <span v-if="error.imageUrl" class="help-block">{{ error.imageUrl }}</span>
      </div>
      <div class="form-group col-md-6" :class="{'has-error': error.date }">
        <label>
          <small>Date</small>
        </label>
        <div class="input-group">
          <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"/></span>
          <input type="date" class="form-control" v-model="value.date">
        </div>
        <span v-if="error.date" class="help-block">{{ error.date }}</span>
      </div>
    </div>

    <div class="row">
      <div class="form-group col-md-6" :class="{'has-error': error.locationName }">
        <label>
          <small>Location</small>
        </label>
        <input type="text" class="form-control" v-model="value.locationName">
        <span v-if="error.locationName" class="help-block">{{ error.locationName }}</span>
      </div>
      <div class="form-group col-md-6" :class="{'has-error': error.locationUrl }">
        <label>
          <small>Location URL</small>
        </label>
        <div class="input-group">
          <span class="input-group-addon"><span class="glyphicon glyphicon-link"/></span>
          <input type="url" class="form-control" v-model="value.locationUrl">
        </div>
        <span v-if="error.locationUrl" class="help-block">{{ error.locationUrl }}</span>
      </div>
    </div>

    <div class="row">
      <div class="form-group col-md-6" :class="{'has-error': error.buyTicketsUrl }">
        <label>
          <small>Buy Tickets URL</small>
        </label>
        <div class="input-group">
          <span class="input-group-addon"><span class="glyphicon glyphicon-link"/></span>
          <input type="text" class="form-control" v-model="value.buyTicketsUrl">
        </div>
        <span v-if="error.buyTicketsUrl" class="help-block">{{ error.buyTicketsUrl }}</span>
      </div>
      <div class="form-group col-md-6" :class="{'has-error': error.websiteUrl }">
        <label>
          <small>Website URL</small>
        </label>
        <div class="input-group">
          <span class="input-group-addon"><span class="glyphicon glyphicon-link"/></span>
          <input type="url" class="form-control" v-model="value.websiteUrl">
        </div>
        <span v-if="error.websiteUrl" class="help-block">{{ error.websiteUrl }}</span>
      </div>
    </div>
  </div>
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

      error.title = this.validateRequired(this.value.title, 'Event Title')
      error.url = this.validateUrl(this.value.url, 'Event URL')
      error.imageUrl = this.validateRequiredUrl(this.value.imageUrl, 'Image URL')
      error.date = this.validateRequired(this.value.date, 'Date')
      error.locationName = this.validateRequired(this.value.locationName, 'Location')
      error.locationUrl = this.validateUrl(this.value.locationUrl, 'Location URL')
      if (this.value.buyTicketsUrl) {
        error.buyTicketsUrl = this.validateUrl(this.value.buyTicketsUrl, 'Buy Tickets URL')
      }
      if (this.value.websiteUrl) {
        error.websiteUrl = this.validateUrl(this.value.websiteUrl, 'Website URL')
      }
      this.value.isValid = _.chain(error)
                            .pickBy()
                            .isEmpty()
                            .value()
      this.$emit('input', this.value)

      return _.pickBy(error)
    }
  }
}
</script>
