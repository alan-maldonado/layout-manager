import _ from 'lodash'
import { EDITABLE } from './common'

export default {
  name: 'Promo Channel',
  component: 'promo-channel',
  model: _.extend({
    title: '',
    time: '',
    url: '',
    imageUrl: '',
    dek: '',
    countdownDate: '',
    countdownTime: ''
  }, EDITABLE)
}
