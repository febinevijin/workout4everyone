import asyncHandler from "express-async-handler";
import Trainer from "../../models/trainer/trainerModel.js";
import trainerWorkout from "../../models/trainer/trainerWorkoutModel.js";
import Order from "../../models/order/orderModel.js";
import adminWallet from "../../models/admin/adminWallet.js";

import generateToken from "../../util/gnerateToken.js";
import cloudinary from "../../util/cloudinary.js";
import path from "path";
import multer from "multer";
import fs from "fs";
import Path from "path";
import {
  uploadImageFile,
  videoUploader,
  
} from "../../middleware/fileHandler.js";


const registerTrainer = asyncHandler(async (req, res) => {
  console.log("hi");
  const { name, email, password, profileImage, image } = req.body;

  // console.log(image);

  const TrainerExist = await Trainer.findOne({ email });

  if (TrainerExist) {
    res.status(400);
    throw new Error("Trainer already exist");
  }

  // let ext = path.extname(image)
  // console.log(ext);

  // let ext = path.extname(image)
  // console.log('werty');
  // console.log(ext,'asdfg');

  // console.log(image);
  const profileUpload = await cloudinary.v2.uploader.upload(profileImage, {
    folder: "trainerProfile",
  });

  const uploadResponse = await cloudinary.v2.uploader.upload(image, {
    folder: "trainerId",
  });

  // console.log(uploadResponse.secure_url);
  let trainerProfile = profileUpload.secure_url;

  let trainerProof = uploadResponse.secure_url;

  const trainer = await Trainer.create({
    name,
    email,
    password,
    trainerProfile,
    trainerProof,
  });

  if (trainer) {
    res.status(201).json({
      _id: trainer._id,
      name: trainer.name,
      email: trainer.email,
      token: generateToken(trainer._id),
      success: true,
    });
  } else {
    res.status(400);
    throw new Error("error occured");
  }
});

// =====================================LOGIN==========================

const loginTrainer = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const trainer = await Trainer.findOne({ email });
  console.log(trainer);

  if (trainer && (await trainer.matchPassword(password))) {
    if (trainer.block) {
      res.status(400);
      throw new Error("Trainer is blocked");
    } else {
      if (!trainer.permission) {
        res.status(400);
        throw new Error("your approval is pending ");
      } else {
        const token = generateToken(trainer._id);

        const options = {
          expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
          ),
          httpOnly: true,
          secure: true,
        };

        res.cookie("trainerToken", token, options).json({
          _id: trainer._id,
          name: trainer.name,
          email: trainer.email,
          token,
        });
      }
    }
  } else {
    res.status(400);
    throw new Error("Invalid email or password");
  }
});

// =============================Add trainer workout=======================

export const postTrainerWorkout = async (req, res, next) => {
  if (req.body.image) {
    console.log("image is present");
  }
  // console.log(req.body);
  // console.log(req.files.video);
  // console.log(req.trainer._id);

  try {
    const video = await videoUploader(req.files.video, next);
    console.log(video, "----------");

    const image = await uploadImageFile(req.body.image, next);
    console.log(image, "+++++++++++++++++");

    // fs.unlink(`./video/${req.files.video.name}`, (err) => {

    //     if (err) return next(new ErrorHandler("video file uploading fail8888888888", 500))
    // })

    await trainerWorkout.create({
      name: req.body.workout,
      description: req.body.description,
      price: req.body.price,
      week: req.body.week,
      previewUrl: image.secure_url,
      previewId: image.public_id,
      videoId: video.public_id,
      videoUrl: video.secure_url,
      trainerId: req.trainer._id,
      trainerName: req.trainer.name
    });

    res.status(201).json({
      msg: "upload completed ",
      status: true,
    });
    //   if(video){

    //       process.exit(0)
    //   }
    // console.log('ssssss');
  } catch (error) {
    console.log(error.message, "=========");
  }
};




// ======================================OrderDetail To wallet======================

export const orderDetails = async (req,res)=>{
  const trainerId = req.trainer._id
  console.log(trainerId);

    try {
      const details = await adminWallet.find({trainerId:trainerId})
      console.log(details);
      res.status(200).json(details)
    } 
    catch (error) {
      console.log(error);

    }
  
}

// =====================================================================================


export { registerTrainer, loginTrainer };
