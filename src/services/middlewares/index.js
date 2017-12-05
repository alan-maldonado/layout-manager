export const resultsMiddleware = async (res) => {
  if (res && res.data && res.data.results.length) {
    return res.data.results || []
  }
  return []
}

export const resultMiddleware = async (res) => {
  if (res && res.data && res.data.result) {
    return res.data.result || {}
  }
  return {}
}
