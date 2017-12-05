import _ from 'lodash'
import { EDITABLE, SIZES } from './common'

export default {
  name: 'Show Subnav',
  component: 'show-subnav',
  size: SIZES.LARGE,
  model: _.extend({
    items: []
  }, EDITABLE)
}
