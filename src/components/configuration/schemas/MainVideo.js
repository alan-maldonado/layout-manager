import _ from 'lodash'
import { EDITABLE } from './common'

export default {
  name: 'Main Video',
  component: 'main-video',
  model: _.extend({
    title: '',
    videoId: '',
    description: ''
  }, EDITABLE)
}
