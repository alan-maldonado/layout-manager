import _ from 'lodash'
import { NOT_EDITABLE } from './common'

export default {
  name: 'Article Content',
  component: 'article-content',
  model: _.extend({}, NOT_EDITABLE)
}
