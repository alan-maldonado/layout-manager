import _ from 'lodash'
import { EDITABLE } from './common'

export default {
  name: 'Ad',
  component: 'ad',
  model: _.extend({
    type: 0,
    adId: '',
    advertisementText: 'ADVERTISEMENT',
    sizes: []
  }, EDITABLE)
}
