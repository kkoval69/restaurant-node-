const Router = require('express')
const router = new Router()
const gameRouter = require('./gameRouter')
const userRouter = require('./userRouter')
const razrabRouter = require('./razrabRouter')
const typeRouter = require('./typeRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/razrab', razrabRouter)
router.use('/game', gameRouter)

module.exports = router
