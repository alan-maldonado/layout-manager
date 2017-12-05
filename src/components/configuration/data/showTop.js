import faker from 'faker'

export default (model) => ({
  url: '',
  imageUrl: faker.image.imageUrl(null, null, undefined, true, true) // (width, height, category, randomize, https)
})
