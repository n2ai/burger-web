const router = require('express').Router()
const {reservation,getOnlineShop, addOrder} = require('../controllers/appController')

/**HTTP Request */
router.post('/reservation',reservation)
router.get('/onlineOrder',getOnlineShop)
router.post('/onlineOrder',addOrder)
module.exports = router