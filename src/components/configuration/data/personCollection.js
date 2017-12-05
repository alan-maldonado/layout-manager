import { fakePersons } from './common'

export default (model) => ({
  title: model.title,
  items: fakePersons()
})
