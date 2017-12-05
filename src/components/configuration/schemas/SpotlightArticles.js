import _ from 'lodash'
import { EDITABLE, SIZES } from './common'

export default {
  name: 'Spotlight Articles',
  component: 'spotlight-articles',
  size: SIZES.LARGE,
  model: _.extend({
    showHero: false,
    items: []
  }, EDITABLE)
}
