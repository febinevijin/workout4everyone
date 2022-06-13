import express from 'express'
import {loginUser, registerUser, getUserProfile,updateUserProfile,getAllWorkout,getSingleWorkout,} from '../../controllers/user/userControllers.js'
// import { protect } from '../../middleware/authMiddleware.js'
import { authenticatedUser, } from "../../middleware/authTrainer.js";
const router = express.Router()

router.route('/registerUser').post(registerUser)
router.route('/loginUser').post(loginUser)
router.route('/userProfile').get(authenticatedUser,getUserProfile)
router.route('/userProfile/:id').put(updateUserProfile)
router.route('/getAllWorkout').get(getAllWorkout)
router.route('/getSingleWorkout/:id').get(getSingleWorkout)

// router.route('/video/upload').post(postVideo)
export default router