const mapVideo = (video) => ({
  title: video.title,
  url: '',
  isEpisode: video.isEpisode,
  isPlayingNow: false,
  isLocked: video.isLocked,
  duration: video.duration,
  thumbnailUrl: video.thumbnailUrl,
  publicationDate: video.publicationDate,
  category: {
    url: '',
    name: video.categoryName
  }
})

export default (model) => ({
  title: model.title,
  items: model.items.map(mapVideo)
})
