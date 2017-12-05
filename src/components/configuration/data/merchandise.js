const mapItem = (item) => ({
  title: item.title,
  description: item.description,
  url: item.url,
  imageUrl: item.imageUrl,
  author: {
    url: item.authorUrl,
    name: item.authorName
  },
  buttons: item.buttons.filter(button => button.title).map(button => ({
    url: button.url,
    label: button.title
  }))
})

export default (model) => ({
  title: model.title,
  items: model.items.map(mapItem)
})
