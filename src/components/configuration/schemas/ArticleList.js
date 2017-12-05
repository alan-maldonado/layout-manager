import _ from 'lodash'
import { EDITABLE, SIZES,
  DEFAULT_SEARCH_CRITERIA,
  DEFAULT_ARTICLES_OPTIONS
} from './common'

export default {
  name: 'Article List',
  component: 'article-list',
  size: SIZES.LARGE,
  model: _.extend({
    ..._.extend({}, DEFAULT_ARTICLES_OPTIONS, {
      showDescription: true,
      showTime: true,
      adPosition: -1
    }),
    ...DEFAULT_SEARCH_CRITERIA
  }, EDITABLE)
}
