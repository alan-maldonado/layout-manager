import faker from 'faker'

const mapArticle = (article) => {
  const fakeCategory = faker.random.word()
  const fakeCategorySlug = faker.helpers.slugify(fakeCategory)
  const decription = faker.lorem.sentence()
  const duration = faker.date.past().toTimeString().substr(0, 5)

  return {
    imageUrl: article.imageUrl || faker.image.imageUrl(null, null, undefined, true, true), // (width, height, category, randomize, https),
    url: article.url,
    title: article.title || faker.random.words(),
    category: {
      name: fakeCategory,
      slug: fakeCategorySlug
    },
    isBreaking: article.isBreakingNews,
    publicationDate: faker.date.past(),
    description: article.description || decription,
    kickerText: article.kicker,
    relatedArticles: article.relatedArticles,
    duration: faker.random.boolean() ? duration : ''
  }
}

export default (model) => ({
  hasHero: model.showHero,
  items: model.items.map(mapArticle)
})
