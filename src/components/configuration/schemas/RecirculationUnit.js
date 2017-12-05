import _ from 'lodash'
import { EDITABLE, SIZES, DEFAULT_ARTICLES_OPTIONS, DEFAULT_SEARCH_CRITERIA } from './common'

export default {
  name: 'Recirculation Unit',
  component: 'recirculation-unit',
  size: SIZES.LARGE,
  model: _.extend({
    title: '',
    fetchMore: false,
    ..._.extend({}, DEFAULT_ARTICLES_OPTIONS, { showSource: true, pillsPosition: 'image' }),
    ..._.extend({}, DEFAULT_SEARCH_CRITERIA, { articlesQuantity: 4 })
  }, EDITABLE)
}
