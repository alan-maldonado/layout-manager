<template>
  <div class="col-md-12 box" :class="{ 'box-default': value.isValid, 'box-danger': !value.isValid }">
    <div class="event-wrapper">
      <div class="form-group col-md-6" :class="{ 'has-error': error.title }">
        <label>Title</label>
        <input
          type="text" class="form-control"
          v-model="value.title"
        >
        <span v-if="error.title" class="help-block">{{ error.title }}</span>
      </div>
      <div class="form-group col-md-6" :class="{ 'has-error': error.url }">
        <label>URL</label>
        <div class="input-group">
          <span class="input-group-addon"><span class="glyphicon glyphicon-link"/></span>
          <input type="url" class="form-control"
                 v-model="value.url"
          >
        </div>
        <span v-if="error.url" class="help-block">{{ error.url }}</span>
      </div>
      <div class="form-group col-md-12" :class="{ 'has-error': error.description }">
        <label>Description</label>
        <textarea rows="3" class="form-control" v-model="value.description" />
        <span v-if="error.description" class="help-block">{{ error.description }}</span>
      </div>
      <div class="form-group col-md-12" :class="{ 'has-error': error.imageUrl }">
        <label>Image URL</label>
        <div class="input-group">
          <span class="input-group-addon"><span class="glyphicon glyphicon-link"/></span>
          <input type="text" class="form-control"
                 v-model="value.imageUrl"
          >
        </div>
        <span v-if="error.imageUrl" class="help-block">{{ error.imageUrl }}</span>
      </div>
      <div class="form-group col-md-6" :class="{ 'has-error': error.authorName }">
        <label>Author name</label>
        <input
          type="text"
          class="form-control"
          placeholder="Name"
          v-model="value.authorName"
        >
        <span v-if="error.authorName" class="help-block">{{ error.authorName }}</span>
      </div>
      <div class="form-group col-md-6" :class="{ 'has-error': error.authorUrl }">
        <label>Author URL</label>
        <div class="input-group">
          <span class="input-group-addon"><span class="glyphicon glyphicon-link"/></span>
          <input
            type="url"
            class="form-control"
            placeholder="URL"
            :disabled="!value.authorName"
            v-model="value.authorUrl"
          >
        </div>
        <span v-if="error.authorUrl" class="help-block">{{ error.authorUrl }}</span>
      </div>
      <div class="form-group col-md-12">
        <label>Buy Links</label>
      </div>
      <div class="form-group" v-for="(btn, index) in value.buttons" :key="index">
        <div class="form-group col-md-6">
          <input
            type="text" class="form-control" placeholder="Description"
            v-model="btn.title">
        </div>
        <div class="form-group col-md-6" :class="{ 'has-error': error.buttons[index].url }">
          <div class="input-group">
            <span class="input-group-addon"><span class="glyphicon glyphicon-link"/></span>
            <input
              type="url" class="form-control" placeholder="URL"
              :disabled="!btn.title" v-model="btn.url">
          </div>
          <span v-if="error.buttons[index].url" class="help-block">{{ error.buttons[index].url }}</span>
        </div>
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
      const error = {
        buttons: [{}, {}, {}]
      }
      if (!this.submitted) { return error }
      error.title = this.validateRequired(this.value.title, 'Title')
      error.url = this.validateRequiredUrl(this.value.url, 'URL')
      error.description = this.validateRequired(this.value.description, 'Description')
      error.imageUrl = this.validateRequiredUrl(this.value.imageUrl, 'Image URL')
      error.authorName = this.validateRequired(this.value.authorName, 'Author name')
      error.authorUrl = this.validateUrl(this.value.authorUrl, 'Author URL')

      this.value.buttons.forEach((btn, index) => {
        if (btn.title) {
          error.buttons[index].url = this.validateRequiredUrl(btn.url, 'URL')
        }
      })

      const isPropsValid = _.chain(error).omit(['buttons'])
                            .pickBy().isEmpty()
                            .value()

      const isButtonsValid = _.every(error.buttons, (button) => _.isEmpty(_.pickBy(button)))
      this.value.isValid = isPropsValid && isButtonsValid
      this.$emit('input', this.value)

      return _.pickBy(error)
    }
  }
}
</script>
