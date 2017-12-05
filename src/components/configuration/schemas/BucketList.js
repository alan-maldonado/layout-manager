import _ from 'lodash'
import { EDITABLE, SIZES, DEFAULT_SEARCH_CRITERIA } from './common'

export default {
  name: 'Bucket List',
  component: 'bucket-list',
  size: SIZES.LARGE,
  model: _.extend({
    title: 'Section title',
    url: '',
    ...DEFAULT_SEARCH_CRITERIA
  }, EDITABLE)
}
