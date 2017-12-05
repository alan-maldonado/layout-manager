import _ from 'lodash'
import { EDITABLE, SIZES } from './common'

export default {
  name: 'Free Form',
  component: 'free-form',
  size: SIZES.LARGE,
  model: _.extend({
    title: '',
    content: ''
  }, EDITABLE)
}
