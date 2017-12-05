import _ from 'lodash'
import { validateRequired, validateUrl, validateRequiredUrl,
  validateChild, validateChildren } from '@/utils/validators'
export const formMixin = {
  props: {
    submitted: {
      type: Boolean,
      default: false
    },
    value: {
      type: Object,
      required: true
    }
  },
  methods: {
    validateRequired,
    validateUrl,
    validateRequiredUrl,
    validateChild,
    validateChildren,
    isValid () {
      return _.isEmpty(this.error)
    }
  }
}
