import _ from 'lodash'
import { EDITABLE, SIZES } from './common'

export default {
  name: 'Image Gallery',
  component: 'image-gallery',
  size: SIZES.LARGE,
  model: _.extend({
    title: 'Image Gallery',
    imagesToShow: 5,
    images: []
  }, EDITABLE)
}
