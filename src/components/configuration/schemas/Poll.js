import _ from 'lodash'
import { EDITABLE, SIZES } from './common'

export default {
  name: 'Poll',
  component: 'poll',
  size: SIZES.SMALL,
  model: _.extend({
    id: ''
  }, EDITABLE)
}
