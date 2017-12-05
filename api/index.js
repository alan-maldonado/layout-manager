var dotenv = require('dotenv')
var dotenvExpand = require('dotenv-expand')
dotenvExpand(dotenv.config())

module.exports = (app) => {
  app.get('/api', (req, res) => {
    res.send({ hi: 'there' })
  })

  require('./layout')(app)
  require('./catalogs')(app)
}
