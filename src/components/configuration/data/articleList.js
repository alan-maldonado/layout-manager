import { fakeArticles } from './common'

export default (model) => ({
  hasDescription: model.showDescription,
  hasMore: false,
  hasMulti: model.showMulti,
  hasTime: model.showTime,
  metaPosition: model.metaPosition || 'header',
  pillsPosition: model.pillsPosition || 'image',
  items: fakeArticles(model),
  adPosition: 2
})
