<template>
  <div class="col-md-12 box" :class="{ 'box-default': value.isValid, 'box-danger': !value.isValid }">
    <div>
      <div class="form-group col-md-6" :class="{'has-error': error.articleUrl }">
        <label>Article</label>
        <article-search-field class="form-group" v-model="value.articleUrl" :article-url="value.articleUrl" />
        <span v-if="error.articleUrl" class="help-block">{{ error.articleUrl }}</span>
      </div>
      <div class="form-group col-md-6" :class="{ 'has-error': error.title }">
        <label>Title Override</label>
        <input
          type="text" class="form-control"
          v-model="value.title"
        >
        <span v-if="error.title" class="help-block">{{ error.title }}</span>
      </div>
      <div class="form-group col-md-12" :class="{ 'has-error': error.imageUrl }">
        <label>Image URL Override</label>
        <div class="input-group">
          <span class="input-group-addon"><span class="glyphicon glyphicon-link"/></span>
          <input type="text" class="form-control"
                 v-model="value.imageUrl"
          >
        </div>
        <span v-if="error.imageUrl" class="help-block">{{ error.imageUrl }}</span>
      </div>
      <slot/>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { formMixin } from '@/components/configuration/forms/mixins'
import { validateUrl, validateRequiredUrl } from '@/utils/validators'

export default {
  mixins: [formMixin],
  props: {
    slotIsValid: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    error () {
      const error = {}
      if (!this.submitted) { return error }

      error.articleUrl = validateRequiredUrl(this.value.articleUrl, 'Article')
      error.imageUrl = validateUrl(this.value.imageUrl, 'URL')

      error.slot = !this.slotIsValid ? 'Slot validation' : null
      this.value.isValid = _.isEmpty(_.pickBy(error))
      this.$emit('input', this.value)
      return _.pickBy(error)
    }
  }
}
</script>
