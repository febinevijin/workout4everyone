import express from 'express'

// import upload from '../../util/multer.js'
// import cloudinary from '../../util/cloudinary.js'
import {loginTrainer, registerTrainer,postTrainerWorkout,orderDetails} from '../../controllers/trainer/trainerControllers.js'
const router = express.Router()

import { authenticatedTrainer, } from "../../middleware/authTrainer.js";





router.route('/registerTrainer').post(registerTrainer)
router.route('/loginTrainer').post(loginTrainer)

router.route('/postTrainerWorkout').post(authenticatedTrainer,postTrainerWorkout)

router.route('/orderDetails').get(authenticatedTrainer,orderDetails)


export default router