import LayoutService from '@/services/LayoutService'
import _ from 'lodash'

export default {
  namespaced: true,
  state: {
    layouts: {},
    customLayouts: {},
    invalidComponents: {},
    isLoading: false,
    uiLock: false
  },

  actions: {
    async fetchLayout ({ commit }, layoutName) {
      commit('setLoading', true)
      try {
        const layout = await LayoutService.fetchLayout(layoutName)
        await commit('updateLayout', {
          name: layoutName,
          regions: layout.regions || {}
        })
        await commit('setLoading', false)
      } catch (e) {
        commit('setLoading', false)
      }
    },
    async fetchCustomLayouts ({ commit }, layoutName) {
      commit('setLoading', true)
      try {
        const keys = await LayoutService.fetchCustomLayouts(layoutName)
        await commit('updateCustomLayouts', {
          name: layoutName,
          keys
        })
        await commit('setLoading', false)
      } catch (e) {
        commit('setLoading', false)
      }
    },
    async saveLayout ({ state }, layoutName) {
      const layout = state.layouts[layoutName]
      return await LayoutService.saveLayout(layoutName, layout)
    },
    async deleteLayout ({ state, dispatch }, layoutName) {
      return await LayoutService.deleteLayout(layoutName)
    },
    saveComponents ({ commit }, componentsInfo) {
      commit('saveComponents', componentsInfo)
    },
    updateRegion ({ commit }, layout) {
      commit('setRegion', layout)
    },
    setValidation ({ commit }, validation) {
      commit('setValidation', validation)
    }
  },

  mutations: {
    updateLayout (state, layout) {
      const layouts = _.cloneDeep(state.layouts)
      layouts[layout.name] = { ...layout }

      state.layouts = layouts
    },
    updateCustomLayouts (state, layout) {
      const customLayouts = _.cloneDeep(state.customLayouts)
      customLayouts[layout.name] = layout.keys

      state.customLayouts = customLayouts
    },
    setRegion (state, layout) {
      state.layouts[layout.name] = {
        ...state.layouts[layout.name],
        ...layout
      }
    },
    setLoading (state, status) {
      state.isLoading = status
      state.uiLock = status
    },
    saveComponents (state, { layoutName, regionName, components }) {
      const layouts = _.cloneDeep(state.layouts)
      if (!layouts[layoutName]) { layouts[layoutName] = { regions: {} } }
      layouts[layoutName].regions[regionName] = components

      state.layouts = layouts
    },
    setValidation (state, { layoutName, componentId, valid }) {
      if (!state.invalidComponents[layoutName]) {
        state.invalidComponents[layoutName] = []
      }
      if (valid) {
        _.remove(state.invalidComponents[layoutName], componentId)
      } else {
        state.invalidComponents[layoutName].push(componentId)
      }
    }
  },

  getters: {
    currentLayout: (state, getters, rootState) => {
      const { layoutName } = rootState.route.meta
      const { elementId } = rootState.route.params
      if (elementId) {
        return (state.layouts[`${layoutName}+${elementId}`] || {}).regions || {}
      }
      return (state.layouts[layoutName] || {}).regions || {}
    },
    isValid: state => layoutName => _.isEmpty(state.invalidComponents[layoutName])
  }
}
