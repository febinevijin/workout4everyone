import express from 'express'

const router = express.Router();
import {sendEmail,videoo} from '../../controllers/test/testController.js'

router.route('/video/upload').post(videoo)
router.route('/email').post(sendEmail)


export default router