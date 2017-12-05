import components from '../../components/configuration'
import _ from 'lodash'

export default {
  namespaced: true,
  state: () => ({
    'homeLayout': components.homeLayout,
    'categoryLayout': components.categoryLayout,
    'tagLayout': components.tagLayout,
    'articleLayout': components.articleLayout,
    'personLayout': components.personLayout,
    'showLayout': components.showLayout
  }),
  getters: {
    componentsLibrary: (state, getters, rootState) => {
      const layoutName = rootState.route.meta.layoutName
      return (state[layoutName] || {})
    },
    getSchema: state => (layout, componentName) => {
      return _.chain(state[layout])
              .values()
              .flatten()
              .find(({ component }) => component === componentName)
              .value().schema || {}
    }
  }
}
