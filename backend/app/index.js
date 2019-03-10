const express = require('express')
const GenerationEngine = require('./generation/engine')
const dragonRouter = require('./api/dragon')
const generationRouter = require('./api/generation')

const app = express()
const engine = new GenerationEngine()

app.locals.engine = engine

app.use('/dragon', dragonRouter)
app.use('/generation', generationRouter)

app.use((err, req, res, next) => {
  // 500 is internal service error
  const statusCode = err.statusCode || 500
  // callback for error handling function
  res.status(statusCode).json({
    type: 'error',
    message: err.message
  })
})

engine.start()

module.exports = app
