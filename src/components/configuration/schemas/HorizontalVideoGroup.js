import _ from 'lodash'
import { EDITABLE, SIZES } from './common'

export default {
  name: 'Horizontal Video Group',
  component: 'horizontal-video-group',
  size: SIZES.LARGE,
  model: _.extend({
    title: '',
    items: []
  }, EDITABLE)
}
