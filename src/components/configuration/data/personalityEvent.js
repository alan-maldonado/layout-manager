const mapPersonalityEvent = (event) => ({
  title: event.title,
  url: event.url,
  imageUrl: event.imageUrl,
  date: event.date,
  location: {
    name: event.locationName,
    url: event.locationUrl
  },
  ticketUrl: event.buyTicketsUrl,
  websiteUrl: event.websiteUrl
})

export default (model) => ({
  title: model.title,
  items: model.items.map(mapPersonalityEvent)
})
