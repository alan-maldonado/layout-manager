<template>
  <form>
    <div class="form-group col-md-8" :class="{ 'has-error': error.title }">
      <label>Title</label>
      <input type="text" class="form-control" v-model="value.title">
      <span v-if="error.title" class="help-block">{{ error.title }}</span>
    </div>
    <div class="form-group col-md-4" :class="{'has-error': error.time }">
      <label>Time</label>
      <div class="input-group">
        <span class="input-group-addon">
          <span class="glyphicon glyphicon-time"/>
        </span>
        <input type="time" class="form-control" v-model="value.time">
      </div>
      <span v-if="error.time" class="help-block">{{ error.time }}</span>
    </div>
    <div class="form-group col-md-12" :class="{ 'has-error': error.url }">
      <label>Url</label>
      <div class="input-group">
        <span class="input-group-addon">
          <span class="glyphicon glyphicon-link"/>
        </span>
        <input type="url" class="form-control" v-model="value.url">
      </div>
      <span v-if="error.url" class="help-block">{{ error.url }}</span>
    </div>
    <div class="form-group col-md-12" :class="{ 'has-error': error.imageUrl }">
      <label>Image Url</label>
      <div class="input-group">
        <span class="input-group-addon">
          <span class="glyphicon glyphicon-link"/>
        </span>
        <input type="url" class="form-control" v-model="value.imageUrl">
      </div>
      <span v-if="error.imageUrl" class="help-block">{{ error.imageUrl }}</span>
    </div>
    <div class="form-group col-md-12" :class="{ 'has-error': error.dek }">
      <label>Description</label>
      <textarea rows="4" class="form-control" v-model="value.dek"/>
      <span v-if="error.dek" class="help-block">{{ error.dek }}</span>
    </div>
    <div class="form-group col-md-12">
      <input type="checkbox" class="field-inline"
             v-model="value.showCountdown" @change="changeShowCountDown">
      <label> Include countdown</label>
    </div>
    <div v-if="value.showCountdown" class="form-group col-md-6"
         :class="{'has-error': error.countdownDate }">
      <label>Date</label>
      <div class="input-group">
        <span class="input-group-addon">
          <span class="glyphicon glyphicon-calendar"/>
        </span>
        <input type="date" class="form-control" v-model="value.countdownDate">
      </div>
      <span v-if="error.countdownDate" class="help-block">
        {{ error.countdownDate }}
      </span>
    </div>
    <div v-if="value.showCountdown" class="form-group col-md-6"
         :class="{'has-error': error.countdownTime }">
      <label>Time</label>
      <div class="input-group">
        <span class="input-group-addon">
          <span class="glyphicon glyphicon-time"/>
        </span>
        <input type="time" class="form-control" v-model="value.countdownTime">
      </div>
      <span v-if="error.countdownTime" class="help-block">
        {{ error.countdownTime }}
      </span>
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

      error.title = this.validateRequired(this.value.title, 'Title')
      error.dek = this.validateRequired(this.value.dek, 'Description')
      error.time = this.validateRequired(this.value.time, 'Time')
      error.url = this.validateRequiredUrl(this.value.url, 'URL')
      error.imageUrl = this.validateRequiredUrl(this.value.imageUrl, 'Image URL')
      if (this.value.showCountdown) {
        error.countdownDate = this.validateRequired(this.value.countdownDate, 'Countdown Date')
        error.countdownTime = this.validateRequired(this.value.countdownTime, 'Countdown Time')
      }
      return _.pickBy(error)
    }
  },
  methods: {
    changeShowCountDown (e) {
      this.value.showCountdown = e.target.checked
      this.$emit('input', _.cloneDeep(this.value))
    }
  }
}
</script>
