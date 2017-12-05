import faker from 'faker'

export default (model) => ({
  title: model.title,
  description: model.description,
  videoUrl: '',
  videoId: model.videoId,
  publicationDate: faker.date.past()
})
