import axios from 'raxios'
import moment from 'moment'

import { getProfile, getIdToken } from '@/services/AuthService'
import { resultsMiddleware, resultMiddleware } from './middlewares'

const fetchLayout = (layout) => {
  const [ layoutName, elementId ] = layout.split('+')

  if (elementId) {
    return axios
      .get('/api/get-layout/:layoutName', {
        urlParams: { layoutName },
        params: { elementId }
      }).then(resultMiddleware)
  }

  return axios
    .get('/api/get-layout/:layoutName',
    {
      urlParams: { layoutName }
    }).then(resultMiddleware)
}

const fetchCustomLayouts = (layout) => {
  const [ layoutName ] = layout.split('+')

  return axios
    .get('/api/get-layout/:layoutName/all',
    {
      urlParams: { layoutName }
    }).then(resultsMiddleware)
}

const saveLayout = (layout, layoutComponents) => {
  const [ layoutName, elementId ] = layout.split('+')
  console.log(layoutComponents)
  const user = getProfile()
  const body = {
    layoutName,
    elementId,
    user,
    publicationDate: moment().format(),
    isDefault: !elementId,
    regions: layoutComponents.regions
  }

  return axios.post('/api/layout/:layoutName',
    body, {
      headers: { Authorization: `Bearer ${getIdToken()}` },
      urlParams: { layoutName: layout }
    })
}

const deleteLayout = (layoutName) => {
  return axios.delete('/api/layout/:layoutName', {
    headers: { Authorization: `Bearer ${getIdToken()}` },
    urlParams: { layoutName }
  })
}

export default {
  fetchLayout,
  fetchCustomLayouts,
  saveLayout,
  deleteLayout
}
