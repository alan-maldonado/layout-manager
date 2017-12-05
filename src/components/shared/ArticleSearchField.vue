<template>
  <div class="article-search-group">
    <div class="input-group">
      <span class="input-group-addon"><span class="glyphicon glyphicon-search"/></span>
      <input
        type="text" ref="articleUrl" class="form-control"
        :value="articleUrl" @keyup="updateUrl" @blur="stopSearch">
    </div>
    <ul class="list-group article-search-results" v-if="searching">
      <li v-if="!searchResults.length" class="list-group-item list-group-item-warning">Suggestions not found</li>
      <li
        class="list-group-item"
        v-for="(article, index) in searchResults"
        :key="index"
        @click="selectUrl(article.canonicalUrl)"
      >{{ article.shortTitle }}</li>
    </ul>
  </div>
</template>

<script>
import _ from 'lodash'
import ArticlesService from '../../services/ArticlesService'

export default {
  props: {
    articleUrl: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      searchResults: [],
      keywords: '',
      searching: false
    }
  },
  watch: {
    articleUrl (keywords) {
      if (keywords) {
        this.keywords = keywords
        this.searchArticles()
      }
    }
  },
  methods: {
    updateUrl () {
      this.$emit('input', this.$refs.articleUrl.value)
    },
    searchArticles: _.debounce(function () {
      this.searching = true
      if (this.keywords) {
        ArticlesService.fetchArticles(this.keywords)
          .then(articles => {
            this.searchResults = articles
          })
      } else {
        this.searchResults = []
      }
    }, 400),
    selectUrl (url) {
      this.$emit('input', url)
      this.stopSearch()
    },
    stopSearch () {
      setTimeout(() => {
        this.searching = false
      }, 450)
    }
  }
}
</script>

<style>
  .article-search-group {
    position: relative;
  }
  .article-search-results {
    position: absolute;
    top: 30px;
    left: 0;
    z-index: 999;
  }

  .list-group-item:hover {
    background-color: #fffcd9
  }
</style>
