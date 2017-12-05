import faker from 'faker'

export default (model) => ({
  url: faker.internet.url(),
  id: faker.random.uuid(),
  name: faker.name.findName(),
  description: faker.name.jobDescriptor(),
  avatar: faker.image.avatar(),
  role: faker.name.jobTitle(),
  social: {},
  isFeatured: faker.random.boolean()
})
