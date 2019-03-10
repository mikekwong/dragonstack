const { Router } = require('express')

const router = new Router()

router.get('/new', (req, res, next) => {
  try {
    res.json({ dragon: req.app.locals.engine.generation.newDragon() })
  } catch (error) {
    next(error)
  }
})

module.exports = router
