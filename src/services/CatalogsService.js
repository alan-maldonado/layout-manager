import axios from 'raxios'
import { resultsMiddleware } from './middlewares'

const fetchShows = () => {
  return axios
    .get('/api/get-shows')
    .then(resultsMiddleware)
}

const fetchPersons = () => {
  return axios
    .get('/api/get-persons')
    .then(resultsMiddleware)
}

const fetchCategories = () => {
  return axios
    .get('/api/get-categories')
    .then(resultsMiddleware)
}

const fetchTags = () => {
  return axios
    .get('/api/get-tags')
    .then(resultsMiddleware)
}

const fetchArticles = () => {
  return axios
    .get('/api/get-articles')
    .then(resultsMiddleware)
}

const fetch = (elementType) => {
  switch (elementType) {
    case 'shows':
      return fetchShows()
    case 'persons':
      return fetchPersons()
    case 'tags':
      return fetchTags()
    case 'categories':
      return fetchCategories()
    case 'articles':
      return fetchArticles()
    default:
      return []
  }
}

export default {
  fetch
}
