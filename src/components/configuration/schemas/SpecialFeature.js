import _ from 'lodash'
import { EDITABLE } from './common'

export default {
  name: 'Special Feature',
  component: 'special-feature',
  model: _.extend({
    title: '',
    imageUrl: '',
    content: '',
    showLink: true,
    linkDescription: 'Read More…',
    linkUrl: ''
  }, EDITABLE)
}
