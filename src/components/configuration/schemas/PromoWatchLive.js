import _ from 'lodash'
import { EDITABLE } from './common'

export default {
  name: 'Promo Watch Live',
  component: 'promo-watch-live',
  model: _.extend({
    name: '',
    url: '',
    logo: ''
  }, EDITABLE)
}
