import _ from 'lodash'
import { NOT_EDITABLE } from './common'

export default {
  name: 'Person Card',
  component: 'person-card',
  model: _.extend({}, NOT_EDITABLE)
}
