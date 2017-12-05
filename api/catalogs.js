const categories = [
  { id: 1, title: 'Sports', description: 'Sports', canonicalUrl: '/category/sports' },
  { id: 2, title: 'World', description: 'World', canonicalUrl: '/category/world' },
  { id: 3, title: 'People', description: 'People', canonicalUrl: '/category/people' }
]

const tags = [
  { id: 1, title: 'US', description: 'United States', canonicalUrl: '/tag/us' },
  { id: 2, title: 'Mexico', description: 'Mexico', canonicalUrl: '/tag/mexico' },
  { id: 3, title: 'Football', description: 'Football', canonicalUrl: '/tag/football' }
]

const articles = [
  { id: 1, title: 'Bitcoin', description: 'Bitcoin', canonicalUrl: '/finance/bitcoin' },
  { id: 2, title: 'Terrorism', description: 'Terrorism', canonicalUrl: '/crime/terrorims' },
  { id: 3, title: 'World cup 2018', description: 'World cup 2018', canonicalUrl: '/soccer/world-cup' }
]

const persons = [
  { id: 1, title: 'Alan Maldonado', description: '', canonicalUrl: '/person/alan-maldonado', image: 'https://lh4.googleusercontent.com/-nteS4Gn6Oto/AAAAAAAAAAI/AAAAAAAAAGQ/KDBNxZbxv2k/photo.jpg' }
]

const shows = [
  { id: 1, title: 'Chelsea Show', description: '', canonicalUrl: '/person/alan-maldonado', image: 'https://i.ytimg.com/vi/-mIBYBJ5Wkc/maxresdefault.jpg' }
]

module.exports = (app) => {
  app.get('/api/get-categories', (req, res) => {
    const results = categories
    res.json({ results })
  })

  app.get('/api/get-tags', (req, res) => {
    const results = tags
    res.json({ results })
  })

  app.get('/api/get-articles', (req, res) => {
    const results = articles
    res.json({ results })
  })

  app.get('/api/get-persons', (req, res) => {
    const results = persons
    res.json({ results })
  })

  app.get('/api/get-shows', (req, res) => {
    const results = shows
    res.json({ results })
  })
}
