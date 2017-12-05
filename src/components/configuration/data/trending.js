import { fakeArticles } from './common'

export default (model) => ({
  title: model.title || 'Trending',
  articles: fakeArticles(model),
  hasMore: model.fetchMore,
  hasCategory: model.showCategory,
  hasTime: model.showtime
})
