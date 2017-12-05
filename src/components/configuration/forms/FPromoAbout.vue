<template>
  <form>
    <div class="form-group col-md-12" :class="{'has-error': error.title }">
      <label>Show Title</label>
      <input type="text" class="form-control" v-model="value.title">
      <span v-if="error.title" class="help-block">{{ error.title }}</span>
    </div>
    <div class="form-group col-md-12" :class="{'has-error': error.description }">
      <label>Description</label>
      <textarea type="text" class="form-control" v-model="value.description"/>
      <span v-if="error.description" class="help-block">{{ error.description }}</span>
    </div>
    <div class="form-group col-md-12" :class="{'has-error': error.url }">
      <label>URL</label>
      <div class="input-group">
        <span class="input-group-addon"><span class="glyphicon glyphicon-link"/></span>
        <input type="url" class="form-control" v-model="value.url">
      </div>
      <span v-if="error.url" class="help-block">{{ error.url }}</span>
    </div>
    <div class="form-group col-md-12">
      <label>Social</label>
      <div class="input-group">
        <span class="input-group-addon">
          <i class="fa fa-facebook"/>
        </span>
        <input
          type="text" class="form-control"
          v-model="value.social.facebook" placeholder="Facebook">
      </div>
      <div class="input-group">
        <span class="input-group-addon">
          <i class="fa fa-twitter" aria-hidden="true"/>
        </span>
        <input
          type="text" class="form-control"
          v-model="value.social.twitter" placeholder="Twitter">
      </div>
      <div class="input-group">
        <span class="input-group-addon">
          <i class="fa fa-google-plus" aria-hidden="true"/>
        </span>
        <input
          type="text" class="form-control"
          v-model="value.social['google+']" placeholder="Google+">
      </div>
      <div class="input-group">
        <span class="input-group-addon">
          <i class="fa fa-snapchat-ghost" aria-hidden="true"/>
        </span>
        <input
          type="text" class="form-control"
          v-model="value.social.snapchat" placeholder="Snapchat">
      </div>
      <div class="input-group">
        <span class="input-group-addon">
          <i class="fa fa-microphone" aria-hidden="true"/>
        </span>
        <input
          type="text" class="form-control"
          v-model="value.social.podcast" placeholder="Podcast">
      </div>
      <div class="input-group">
        <span class="input-group-addon">
          <i class="fa fa-linkedin" aria-hidden="true"/>
        </span>
        <input
          type="text" class="form-control"
          v-model="value.social.linkedin" placeholder="LinkedIn">
      </div>
      <div class="input-group">
        <span class="input-group-addon">
          <i class="fa fa-instagram" aria-hidden="true"/>
        </span>
        <input
          type="text" class="form-control"
          v-model="value.social.instagram" placeholder="Instagram">
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

      error.url = this.validateUrl(this.value.url, 'URL')
      return _.pickBy(error)
    }
  }
}
</script>

<style scoped>
  .input-group {
    padding-bottom: 15px;
  }
</style>
