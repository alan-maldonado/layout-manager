const mapImage = (image) => ({
  imageUrl: image.imageUrl,
  show: true
})

export default (model) => ({
  title: model.title,
  images: model.images.map(mapImage)
})
