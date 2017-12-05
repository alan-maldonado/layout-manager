export default (model) => ({
  title: model.title,
  description: model.description,
  url: model.url,
  social: {
    facebook: model.social.facebook,
    twitter: model.social.twitter,
    'google+': model.social['google+'],
    snapchat: model.social.snapchat,
    podcast: model.social.podcast,
    linkedin: model.social.linkedin,
    instagram: model.social.instagram
  }
})
