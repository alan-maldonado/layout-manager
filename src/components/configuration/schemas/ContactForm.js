import _ from 'lodash'
import { EDITABLE } from './common'

export default {
  name: 'Contact Form',
  component: 'contact-form',
  model: _.extend({
    title: '',
    description: ''
  }, EDITABLE)
}
