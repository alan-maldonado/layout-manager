import axios from 'raxios'
import { resultsMiddleware } from './middlewares'

const fetchArticles = () => {
  return axios.get('/api/get-articles')
    .then(resultsMiddleware)
}

export default {
  fetchArticles
}
