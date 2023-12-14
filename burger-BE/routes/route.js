const router = require('express').Router()
const {reservation} = require('../controllers/appController')

/**HTTP Request */
router.post('/reservation',reservation)

module.exports = router