import express from 'express'
import {loginUser, registerUser, getUserProfile,updateUserProfile,getAllWorkout,getSingleWorkout,getMyWorkout,getVideoPlayer,getCheckOutWorkout} from '../../controllers/user/userControllers.js'
// import { protect } from '../../middleware/authMiddleware.js'
import { authenticatedUser, } from "../../middleware/authTrainer.js";
const router = express.Router()

router.route('/registerUser').post(registerUser)
router.route('/loginUser').post(loginUser)
router.route('/userProfile').get(authenticatedUser,getUserProfile)
router.route('/userProfile/:id').put(updateUserProfile)
router.route('/getAllWorkout').get(getAllWorkout)
router.route('/getSingleWorkout/:id').get(authenticatedUser,getSingleWorkout)

router.route('/getMyWorkout').get(authenticatedUser,getMyWorkout)
router.route('/getSingleWorkout/:id').get(getSingleWorkout)
router.route('/videoPlayer/:id').get(getVideoPlayer)
router.route('/getCheckOutWorkout/:id').get(authenticatedUser,getCheckOutWorkout)
export default router