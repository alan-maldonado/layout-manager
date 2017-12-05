import _ from 'lodash'
import { EDITABLE } from './common'

export default {
  name: 'Promo About',
  component: 'promo-about',
  model: _.extend({
    title: 'About the Show',
    description: '',
    url: '',
    social: {
      facebook: '',
      twitter: '',
      'google+': '',
      snapchat: '',
      podcast: '',
      linkedin: '',
      instagram: ''
    }
  }, EDITABLE)
}
