const { Router } = require('express')

const router = new Router()

router.get('/', async (req, res, next) => {
  try {
    await res.json({ generation: req.app.locals.engine.generation })
  } catch (error) {
    next(error)
  }
})

module.exports = router
