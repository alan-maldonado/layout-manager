import { fakeArticles } from './common'

export default (model) => ({
  title: model.title,
  items: fakeArticles(model)
})
