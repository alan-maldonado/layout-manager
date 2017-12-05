import _ from 'lodash'
import { EDITABLE, DEFAULT_ARTICLES_OPTIONS } from './common'

export default {
  name: 'Article List Show',
  component: 'article-list-content',
  model: _.extend({
    size: 6,
    fetchMore: false,
    adPosition: -1,
    type: 'show',
    ..._.extend({}, DEFAULT_ARTICLES_OPTIONS, { showDescription: true, showTime: true })
  }, EDITABLE)
}
