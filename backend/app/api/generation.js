const { Router } = require('express')

const router = new Router()

router.get('/', (req, res, next) => {
  try {
    res.json({ generation: req.app.locals.engine.generation })
  } catch (error) {
    next(error)
  }
})

module.exports = router
