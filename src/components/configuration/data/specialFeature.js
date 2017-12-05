export default (model) => ({
  title: model.title,
  imageUrl: model.imageUrl,
  imageAlt: model.title,
  content: model.content,
  buttonUrl: model.linkUrl,
  buttonLabel: model.linkDescription
})
