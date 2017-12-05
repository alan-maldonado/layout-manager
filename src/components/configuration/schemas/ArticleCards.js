import _ from 'lodash'
import { EDITABLE, SIZES, DEFAULT_SEARCH_CRITERIA, DEFAULT_ARTICLES_OPTIONS } from './common'

export default {
  name: 'Article Cards',
  component: 'article-cards',
  size: SIZES.LARGE,
  model: _.extend({
    sections: [
      {
        title: 'Sub Section',
        ..._.extend({}, DEFAULT_ARTICLES_OPTIONS, { showHero: true, showDescription: true, showCategory: true }),
        ...DEFAULT_SEARCH_CRITERIA
      },
      {
        title: 'Sub Section',
        ..._.extend({}, DEFAULT_ARTICLES_OPTIONS, { showHero: true, showDescription: true, showCategory: true }),
        ...DEFAULT_SEARCH_CRITERIA
      },
      {
        title: 'Sub Section',
        ..._.extend({}, DEFAULT_ARTICLES_OPTIONS, { showHero: true, showDescription: true, showCategory: true }),
        ...DEFAULT_SEARCH_CRITERIA
      }
    ]
  }, EDITABLE)
}
