import asyncHandler from "express-async-handler";
import User from "../../models/user/userModel.js";
import trainerWorkout from "../../models/trainer/trainerWorkoutModel.js";
import generateToken from "../../util/gnerateToken.js";
import multer from "multer";
import cloudinary from "../../util/cloudinary.js";

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("user already exist");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
      success: true,
    });
  }
  // else{
  //     res.status(400)
  //     throw new Error('error occured')
  // }

  {
    res.status(400).json({
      success: false,
      message: "Invalid email or password",
    });
    // throw new Error('Invalid email or password')
  }
});

// =====================================LOGIN==========================

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  console.log(user);

  if (user && (await user.matchPassword(password))) {
    if (user.block == true) {
      res.json("you have been blocked");
    } else {

      const token =  generateToken(user._id)

      const options = {
        expires:new Date(
            Date.now()+process.env.COOKIE_EXPIRE*24*60*60*1000
        ),
        httpOnly:true,
        secure: true

      };
      // console.log(options,token,"111111111");


      res.status(200).cookie("userToken",token,options).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token,
      });
    }
  } else {
    res.status(400).json({
      success: false,
      message: "Invalid email or password",
    });
    // throw new Error('Invalid email or password')
  }
});
// ===================================Profile==================

const getUserProfile = asyncHandler(async (req, res) => {
  console.log(req.user, "111111111111111111111111111");
  const user = await User.findById(req.user._id);

  console.log(user, "WEIOGHJKL");
  try {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

// ===========================UPDATE USER PROFILE=====================
const updateUserProfile = async (req, res) => {
  const update = {
    name: req.body.name,
    email: req.body.email,
  };
  const userId = req.params.id;
  try {
    const updatedProfile = await User.findByIdAndUpdate(userId, update, {
      new: true,
    });
    res.json(updatedProfile);
  } catch (error) {
    res.json(error);
  }
};

// ======================================GET PRODUCT PAGE================================

export const getAllWorkout = async(req,res) =>{
  try {
    const allWorkout = await trainerWorkout.find({})
    res.json(allWorkout)
    
  } catch (error) {
    res.json("no workout")
  }
}

// ======================================GET single PRODUCT PAGE================================

export const getSingleWorkout = async(req,res) =>{
  const workoutId = req.params.id
  // console.log(workoutId);
  try {
    const singleWorkout = await trainerWorkout.findById(workoutId)
    // console.log(singleWorkout);
    res.json(singleWorkout)
    
  } catch (error) {
    res.json("no workout")
  }
}




export { registerUser, loginUser, getUserProfile, updateUserProfile };
