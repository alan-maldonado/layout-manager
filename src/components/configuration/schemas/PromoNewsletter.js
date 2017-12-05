import _ from 'lodash'
import { EDITABLE } from './common'

export default {
  name: 'Promo Newsletter',
  component: 'promo-newsletter',
  model: _.extend({
    title: 'Get the best of Fox News delivered to your inbox daily'
  }, EDITABLE)
}
