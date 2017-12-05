import _ from 'lodash'
import { EDITABLE } from './common'

export default {
  name: 'Person Collection',
  component: 'person-collection',
  model: _.extend({
    title: 'Hosts'
  }, EDITABLE)
}
