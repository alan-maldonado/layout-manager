export const isUrlValid = (url) => {
  if (typeof url !== 'string') { return true }
  const isValid = url.match(/(^$)|((http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*))/g)

  return !!isValid
}

export const validateUrl = (url, fieldTitle) => {
  return !isUrlValid(url) ? `${fieldTitle} is not valid` : null
}

export const validateRequiredUrl = (url, fieldTitle) => {
  if (!url) {
    return `${fieldTitle} should not be empty`
  }
  return validateUrl(url, fieldTitle)
}

export const validateRequired = (str, fieldTitle) => {
  if (!str) {
    return `${fieldTitle} should not be empty`
  }
  return null
}

export const validateChild = (refComponent, fieldTitle) => {
  if (!refComponent.isValid()) {
    return `${fieldTitle} is not valid`
  }
  return null
}

export const validateChildren = (items, fieldTitle) => {
  const isInvalid = items.some(item => !item.isValid)
  if (isInvalid) {
    return `${fieldTitle} are not valid`
  }
  return null
}
