const _ = require('lodash')

const toCamelCase = (obj) => _.mapKeys(obj, (v, k) => _.camelCase(k))

module.exports = {
  articlesMiddleware: (res) => {
    if (res && res.data && res.data.results) {
      return res.data.results
    }
    return []
  },
  layoutMiddleware: (res) => {
    if (res && res.data && res.data.results && res.data.results.length) {
      const [ layoutData ] = res.data.results
      const layout = toCamelCase(layoutData)
      return layout.regions
    }
    return {}
  },
  customLayoutsKeysMiddleware: (res) => {
    if (res && res.data && res.data.results && res.data.results.length) {
      return res.data.results.map(customLayout => customLayout.key)
    }
    return []
  }
}
