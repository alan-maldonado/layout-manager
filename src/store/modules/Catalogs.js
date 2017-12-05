import CatalogsService from '@/services/CatalogsService'

export default {
  namespaced: true,
  state: () => ({
    articles: [],
    categories: [],
    persons: [],
    sections: [],
    shows: [],
    tags: []
  }),
  actions: {
    async fetch ({ commit, state }, elementType) {
      if (elementType !== 'articles' && state[elementType] && state[elementType].length) { return } // already fetched before

      try {
        const elements = await CatalogsService.fetch(elementType)
        await commit('update', {
          elementType,
          elements
        })
      } catch (e) {
      }
    }
  },
  mutations: {
    update: (state, { elementType, elements }) => {
      state[elementType] = elements
    }
  },
  getters: {
    articles: (state, getters, rootState) => {
      const keys = rootState.Layouts.customLayouts.articleLayout || []
      return state.articles.map(article => ({
        ...article,
        hasLayout: keys.includes(article.id)
      }))
    },
    categories: (state, getters, rootState) => {
      const keys = rootState.Layouts.customLayouts.categoryLayout || []
      return state.categories.map(category => ({
        ...category,
        hasLayout: keys.includes(category.id)
      }))
    },
    sections: (state, getters, rootState) => {
      const keys = rootState.Layouts.customLayouts.sectionLayout || []
      return state.sections.map(section => ({
        ...section,
        hasLayout: keys.includes(section.id)
      }))
    },
    tags: (state, getters, rootState) => {
      return state.tags
    },
    persons: (state, getters, rootState) => {
      const keys = rootState.Layouts.customLayouts.personLayout || []
      return state.persons.map(person => ({
        ...person,
        hasLayout: keys.includes(person.id)
      }))
    },
    shows: (state, getters, rootState) => {
      const keys = rootState.Layouts.customLayouts.showLayout || []
      return state.shows.map(show => ({
        ...show,
        hasLayout: keys.includes(show.id)
      }))
    },
    elements: (state, getters, rootState) => getters[rootState.route.meta.elementType] || []
  }
}
