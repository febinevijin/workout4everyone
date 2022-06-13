import express from "express";

import {
  loginAdmin,
  registerAdmin,
  acceptTrainer,
  getAllUser,
  getAllTrainer,
  letBlockUser,
  letBlockTrainer,
  adminPostWorkout,
  getWorkout,
  getUserCount,
  getTrainerCount,
  getVideoCount,
  getApplication,
  approveTrainer,
  denyTrainer,

} from "../../controllers/admin/adminControler.js";

const router = express.Router();

router.route("/register").post(registerAdmin);
router.route("/loginAdmin").post(loginAdmin);
router.route("/acceptTrainer/:id").put(acceptTrainer);
router.route("/allUser").get(getAllUser);
router.route("/allTrainer").get(getAllTrainer);
router.route("/blockUser/:id").put(letBlockUser);
router.route("/blockTrainer/:id").put(letBlockTrainer);

router.route("/adminAddWorkout").post(adminPostWorkout);

// router.route('/postImage', upload.single("image")).post(PostImage)

router.route('/ppl').get(getWorkout) 

router.route('/userCount').get(getUserCount)
router.route('/trainerCount').get(getTrainerCount)
router.route('/videoCount').get(getVideoCount)

router.route('/getApplication').get(getApplication)
router.route('/approveTrainer/:id').put(approveTrainer)
router.route('/denyTrainer/:id').delete(denyTrainer)


export default router;
