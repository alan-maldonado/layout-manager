import _ from 'lodash'
import { EDITABLE, SIZES, DEFAULT_ARTICLES_OPTIONS, DEFAULT_SEARCH_CRITERIA } from './common'

export default {
  name: 'Trending',
  component: 'trending',
  size: SIZES.LARGE,
  model: _.extend({
    title: '',
    size: 4,
    fetchMore: false,
    ..._.extend({}, DEFAULT_ARTICLES_OPTIONS, { showCategory: true, showTime: true }),
    ..._.extend({}, DEFAULT_SEARCH_CRITERIA, { articlesQuantity: 4 })
  }, EDITABLE)
}
