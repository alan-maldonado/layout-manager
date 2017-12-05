<template>
  <div>
    <div class="form-group col-xs-12">
      <label>Search Criteria</label>
      <div class="btn-group article-list__search-criteria col-xs-12" :class="{ 'article-list__search-criteria--contains-fixed': showByFixedArticles }" data-toggle="buttons">
        <label v-for="criteria in criterias"
               class="btn article-list__search-criterion"
               :key="criteria.key"
               :class="getSelectedStyle(criteria.key)"
               @click="changeCriteria(criteria.key)"
        >
          <input
            type="radio"
            name="searchCriteria"
            autocomplete="off"
            :checked="value.searchCriteria === criteria.key" > {{ criteria.label }}
        </label>
      </div>
    </div>
    <div class="form-group col-xs-12" :class="{ 'has-error': error.searchSelected }" v-if="value.isCategory">
      <label>Search Articles by Category</label>
      <multiselect
        v-model="selectedCategory"
        :options="categories"
        :option-height="104"
        :allow-empty="false"
        :show-labels="false"
        label="title"
        track-by="id"
        placeholder="Pick one category"
        @input="updateSelected"
      >
        <template slot="option" slot-scope="props">
          <img
            v-if="props.option.image" class="option__image"
            :src="props.option.image" :alt="props.option.title">
          <div class="option__desc">
            <span class="option__title">{{ props.option.title }}</span>
            <span class="option__small">{{ props.option.description }}</span>
          </div>
        </template>
      </multiselect>
      <span v-if="error.searchSelected" class="help-block">Category {{ error.searchSelected }}</span>
    </div>
    <div class="form-group col-xs-12" v-if="value.isFixed">
      <collection-items
        v-model="value.fixedArticles"
        :submitted="submitted"
        :item-model="articleModel"
        label-property="articleUrl"
        component-form-name="search-criteria-fixed-articles"
        ref="collectionItems"
      >
        <label>Fixed Articles</label>
      </collection-items>
    </div>
    <div class="form-group col-xs-12" :class="{ 'has-error': error.searchSelected }" v-if="value.isKeyword">
      <label>Search Articles by Keyword</label>
      <input
        type="text" class="form-control" placeholder="Keyword"
        v-model="value.searchSelected">
      <span v-if="error.searchSelected" class="help-block">Keyword {{ error.searchSelected }}</span>
    </div>
    <div class="form-group col-xs-12" :class="{ 'has-error': error.searchSelected }" v-if="value.isTag">
      <label>Search Articles by Tag</label>
      <multiselect
        v-model="selectedTag"
        :value="value.searchSelected"
        :options="tags"
        :option-height="104"
        :allow-empty="false"
        :show-labels="false"
        label="title"
        track-by="id"
        placeholder="Pick one tag"
        @input="updateSelected"
      >
        <template slot="option" slot-scope="props">
          <img
            v-if="props.option.image" class="option__image"
            :src="props.option.image" :alt="props.option.title">
          <div class="option__desc">
            <span class="option__title">{{ props.option.title }}</span>
            <span class="option__small">{{ props.option.description }}</span>
          </div>
        </template>
      </multiselect>
      <span v-if="error.searchSelected" class="help-block">Tag {{ error.searchSelected }}</span>
    </div>
    <div class="form-group col-xs-6" v-if="!value.isFixed && !value.fixedAmount">
      <label>Number of Articles</label>
      <input
        type="number" class="form-control"
        step="1" min="1" max="100"
        v-model="value.articlesQuantity">
    </div>
    <div class="form-group col-xs-6" v-if="!value.isFixed">
      <label>Offset</label>
      <input
        type="number" class="form-control"
        step="1" min="0" max="100"
        v-model="value.offset">
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { mapGetters } from 'vuex'
import { formMixin } from '@/components/configuration/forms/mixins'
export default {
  mixins: [formMixin],
  props: {
    showNoCriteria: { type: Boolean, default: true },
    showByCategory: { type: Boolean, default: true },
    showByTag: { type: Boolean, default: true },
    showByKeyword: { type: Boolean, default: true },
    showByFixedArticles: { type: Boolean, default: true }
  },
  data () {
    return {
      selectedCategory: null,
      selectedTag: null,
      articleModel: {
        articleUrl: '',
        title: '',
        imageUrl: '',
        isValid: false
      }
    }
  },
  computed: {
    criterias () {
      const criteriaItems = []
      if (this.showNoCriteria) { criteriaItems.push({ key: 'No Criteria', label: 'None' }) }
      if (this.showByCategory) { criteriaItems.push({ key: 'By Category', label: 'Category' }) }
      if (this.showByTag) { criteriaItems.push({ key: 'By Tag', label: 'Tag' }) }
      if (this.showByKeyword) { criteriaItems.push({ key: 'By Keyword', label: 'Keyword' }) }
      if (this.showByFixedArticles) { criteriaItems.push({ key: 'By Fixed Articles', label: 'Managed' }) }
      return criteriaItems
    },
    error () {
      const error = {}
      if (!this.submitted) { return error }

      const isDynamicSearch = this.value.isCategory || this.value.isKeyword || this.value.isTag
      if (isDynamicSearch) {
        error.searchSelected = this.validateRequired(this.value.searchSelected, 'search criteria')
      }
      if (this.value.isFixed && !this.$refs.collectionItems.isValid()) {
        error.fixedArticles = 'Articles are not valid'
      }

      return _.pickBy(error)
    },
    ...mapGetters('Catalogs', ['categories', 'tags'])
  },
  mounted () {
    if (this.value.searchSelected && this.value.isCategory) {
      this.selectedCategory = _.find(this.categories, category => category.id === this.value.searchSelected)
    }
    if (this.value.searchSelected && this.value.isTag) {
      this.selectedTag = _.find(this.tags, tag => tag.id === this.value.searchSelected)
    }
  },
  methods: {
    changeCriteria (criteria) {
      this.selectedCategory = null
      this.selectedTag = null
      this.value.searchCriteria = criteria
      this.value.searchSelected = ''
      this.value.isCategory = criteria === 'By Category'
      this.value.isFixed = criteria === 'By Fixed Articles'
      this.value.isKeyword = criteria === 'By Keyword'
      this.value.isTag = criteria === 'By Tag'
      this.$emit('input', this.value)
    },
    updateSelected ({ id }) {
      this.value.searchSelected = id
    },
    getSelectedStyle (criteria) {
      if (criteria === this.value.searchCriteria) {
        return ['active', 'btn-primary']
      }
      return ['btn-default']
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.article-list__search-criteria {
  padding: 0;
  width: 100%;
}

.article-list__search-criterion {
  width: 25%;
}

.article-list__search-criteria--contains-fixed .article-list__search-criterion {
  width: 20%;
}

.option__desc {
  padding: 10px;
}

.option__title {
  padding: 24px;
}

.option__small {
  margin-top: 10px;
  display: block;
}

.option__image {
  max-height: 80px;
  margin-right: 10px;
}

.option__desc, .option__image {
  display: inline-block;
  vertical-align: middle;
}
</style>
