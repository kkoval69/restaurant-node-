const Router = require('express')
const router = new Router()
const razrabController = require('../controllers/razrabController')

router.post('/', razrabController.create)
router.get('/', razrabController.getAll)

module.exports = router
