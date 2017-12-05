import _ from 'lodash'

export const toCamelCase = (obj) => _.mapKeys(obj, (v, k) => _.camelCase(k))
