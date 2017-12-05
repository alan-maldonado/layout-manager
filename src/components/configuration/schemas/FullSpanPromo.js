import _ from 'lodash'
import { EDITABLE, SIZES } from './common'

export default {
  name: 'Full Span Promo',
  component: 'full-span-promo',
  size: SIZES.LARGE,
  model: _.extend({
    slides: []
  }, EDITABLE)
}
