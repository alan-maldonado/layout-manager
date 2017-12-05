const requireAuth = require('./requireAuth')

const layouts = {}

module.exports = (app) => {
  // fetch all layouts
  app.get('/api/layout', (req, res) => {
    const results = layouts
    res.status(200).json({ results })
  })

  // save a layout
  app.post('/api/layout/:layoutName', requireAuth, (req, res) => {
    const { layoutName } = req.params
    const layout = req.body

    layouts[layoutName] = layout

    res.status(200).json(layout)
  })

  // delete a layout
  app.delete('/api/layout/:layoutName', requireAuth, (req, res) => {
    const { layoutName } = req.params

    delete layouts[ layoutName ]

    res.status(204).send()
  })

  // fetch a layout
  app.get('/api/get-layout/:layoutName', (req, res) => {
    const { layoutName } = req.params
    const { elementId } = req.query
    let result = {}
    if (elementId) {
      result = layouts[`${layoutName}+${elementId}`] || {}
    } else {
      result = layouts[layoutName] || {}
    }

    res.status(200).json({ result })
  })

  // fetch all customs layouts per type
  app.get('/api/get-layout/:layoutType/all', (req, res) => {
    const { layoutType } = req.params
    console.log(layoutType)
    res.json({ hi: 'there' })
  })
}
