export default (model) => ({
  items: model.items.map(nav => ({
    label: nav.title,
    url: nav.url
  }))
})
