import _ from 'lodash'
import { EDITABLE, SIZES } from './common'

export default {
  name: 'Personality Event Collection',
  component: 'personality-event',
  size: SIZES.LARGE,
  model: _.extend({
    title: 'Speaking Engagements',
    items: []
  }, EDITABLE)
}
