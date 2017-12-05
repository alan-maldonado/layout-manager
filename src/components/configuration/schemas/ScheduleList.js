import _ from 'lodash'
import { EDITABLE } from './common'

export default {
  name: 'Schedule List',
  component: 'schedule-list',
  model: _.extend({
    showDays: false
  }, EDITABLE)
}
