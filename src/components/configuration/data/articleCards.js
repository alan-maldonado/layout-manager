import { fakeArticles } from './common'

const mapSection = (section) => ({
  title: section.title,
  hasHero: section.showHero,
  items: fakeArticles(section)
})

export default (model) => ({
  items: model.sections.map(mapSection)
})
