import JWT from "jsonwebtoken";
import ErrorHandler from "../util/ErrorHandler.js";
import CatchAsyncError from "./CatchAsyncError.js";
import Trainer from "../models/trainer/trainerModel.js";
import User from "../models/user/userModel.js";
import Admin from "../models/admin/adminModel.js";

const authenticatedTrainer = CatchAsyncError(async (req, res, next) => {
    let {trainerToken} = req.cookies
//    console.log(req.cookies);
  
    if (!trainerToken) {
        return next(new ErrorHandler("Please Login to access this resource", 401))
    }

    const decodeData = JWT.verify(trainerToken,process.env.JWT_SECRET)

    req.trainer = await Trainer.findById(decodeData.id)


    next();

})

const authenticatedUser = CatchAsyncError(async (req, res, next) => {
    let {userToken} = req.cookies
   
   
    if (!userToken) {
        return next(new ErrorHandler("Please Login to access this resource", 401))
    }

    const decodeData = JWT.verify(userToken,process.env.JWT_SECRET)

    req.user = await User.findById(decodeData.id)


    next();

})

const authenticatedAdmin = CatchAsyncError(async (req, res, next) => {
    let token =req.headers.authorization

    token=token.split(" ")[1]
    if (!token) {
        return next(new ErrorHandler("Please Login to access this resource", 401))
    }

    const decodeData = JWT.verify(token,process.env.JWT_SECRET)

    req.admin = await Admin.findById(decodeData.id)


    next();

})



export { authenticatedTrainer,authenticatedUser,authenticatedAdmin }