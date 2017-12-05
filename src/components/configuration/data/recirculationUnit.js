import { fakeArticles } from './common'

export default (model) => ({
  title: model.title,
  articles: fakeArticles(model)
})
