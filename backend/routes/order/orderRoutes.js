import express from 'express'
import { authenticatedUser } from '../../middleware/authTrainer.js'
import {placeOrder,distributeMoney} from '../../controllers/order/orderController.js'
const router = express.Router()



router.route('/placeOrder').post(authenticatedUser,placeOrder)
router.route('/distributeMoney').post(distributeMoney)

export default router