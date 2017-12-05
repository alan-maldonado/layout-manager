import _ from 'lodash'
import { EDITABLE, SIZES } from './common'

export default {
  name: 'Merchandise Collection',
  component: 'merchandise',
  size: SIZES.LARGE,
  model: _.extend({
    title: 'Merchandise',
    items: []
  }, EDITABLE)
}
