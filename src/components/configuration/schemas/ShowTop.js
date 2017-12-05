import _ from 'lodash'
import { EDITABLE } from './common'

export default {
  name: 'Show Top',
  component: 'show-top',
  model: _.extend({
    imageUrl: '',
    small: '',
    medium: '',
    large: '',
    extraLarge: ''
  }, EDITABLE)
}
