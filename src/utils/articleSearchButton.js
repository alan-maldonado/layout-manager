import store from '../store/index'
import $ from 'jquery'
import _ from 'lodash'

export default {
  classes: 'btn btn-xs btn-primary',
  label: 'Search',
  onclick (model, field) {
    store.state.articleSetter = (article) => {
      _.set(model, field.model, article.canonical_url)
    }

    const elem = $('#modal-article-search')
    elem.modal('show')
  }
}
