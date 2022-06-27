import express from 'express'
import multer from 'multer';

const router = express.Router();
import {sendEmail,} from '../../controllers/test/testController.js'

  

router.route('/email').post(sendEmail)


export default router