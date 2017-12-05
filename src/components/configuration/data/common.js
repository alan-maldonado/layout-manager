import _ from 'lodash'
import faker from 'faker'

const fakeArticle = () => {
  const fakeCategory = faker.random.word()
  const fakeCategorySlug = faker.helpers.slugify(fakeCategory)
  const decription = faker.lorem.sentence()
  const tag = faker.random.word()
  const duration = faker.date.past().toTimeString().substr(0, 5)
  return {
    title: faker.random.words(),
    description: decription,
    publicationDate: faker.date.past(),
    dek: decription,
    imageUrl: faker.image.imageUrl(null, null, undefined, true, true),
    url: '',
    isDeveloping: faker.random.boolean(),
    duration: faker.random.boolean() ? duration : null,
    pill: faker.random.boolean() ? duration : null,
    category: {
      name: fakeCategory,
      slug: fakeCategorySlug
    },
    tag: tag,
    categoryUrl: `/category/${fakeCategorySlug}`,
    overlayType: 'article',
    isBreakingNews: faker.random.boolean(),
    isBreaking: faker.random.boolean()
  }
}

const fakeFixedArticles = fixedArticle => {
  const fakeCategory = faker.random.word()
  const fakeCategorySlug = faker.helpers.slugify(fakeCategory)
  const decription = faker.lorem.sentence()
  const tag = faker.random.word()
  return {
    title: fixedArticle.title || faker.random.words(),
    description: decription,
    publicationDate: faker.date.past(),
    dek: decription,
    imageUrl: fixedArticle.imageUrl || faker.image.imageUrl(null, null, undefined, true, true),
    url: '',
    category: {
      name: fakeCategory,
      slug: fakeCategorySlug
    },
    tag: tag,
    categoryUrl: `/category/${fakeCategorySlug}`,
    overlayType: 'article',
    isBreakingNews: faker.random.boolean()
  }
}

export const fakeArticles = (searchCriteria) => {
  const size = searchCriteria.fixedArticles.length || searchCriteria.articlesQuantity || 5
  const fixedArticles = searchCriteria.fixedArticles

  if (fixedArticles.length) {
    return fixedArticles.map(fakeFixedArticles)
  }

  return _.range(size).map(fakeArticle)
}

const fakePerson = () => {
  return {
    url: '',
    id: faker.random.uuid(),
    name: faker.name.findName(),
    description: faker.name.jobDescriptor(),
    avatar: faker.image.avatar()
  }
}
export const fakePersons = () => {
  const random = _.random(0, 5)
  return _.range(random).map(fakePerson)
}
