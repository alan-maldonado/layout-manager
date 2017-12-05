const mapSlide = (slide) => ({
  showTitle: slide.showTitle,
  title: slide.title,
  buttonLabel: slide.linkDescription,
  url: '',
  imageUrl: slide.imageUrl
})

export default (model) => ({
  slides: model.slides.map(mapSlide)
})
