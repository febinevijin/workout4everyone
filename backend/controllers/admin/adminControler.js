import asyncHandler from 'express-async-handler'
import Admin from '../../models/admin/adminModel.js'
import Trainer from '../../models/trainer/trainerModel.js'
import User from "../../models/user/userModel.js";
import adminWorkout from '../../models/admin/adminWorkoutModel.js'
import generateToken from '../../util/gnerateToken.js'
import trainerWorkout from '../../models/trainer/trainerWorkoutModel.js';
import { application } from 'express';




const registerAdmin = asyncHandler (async(req,res) => {
    const {name,email,password} = req.body

    const admin = await Admin.create({
        name,email,password,
    })

    if (admin){
        res.status(201).json({
            _id : admin._id,
            name: admin.name,
            email:admin.email,
            token:generateToken(admin._id),
        })
    }else{
        res.status(400).json({
            success:false,
            message:"Invalid email or password"
        })
        // throw new Error('Invalid email or password')
    }

   

})

// =====================================LOGIN==========================

const loginAdmin = asyncHandler (async(req,res) => {
    const { email, password} = req.body;

    const admin = await Admin.findOne({ email });

    if(admin && (await admin.matchPassword(password))) {

        const token=generateToken(admin._id)

        res.cookie("token",token,{ httpOnly: true, secure: true, maxAge: 3600000 }).json({
            _id: admin._id,
            name: admin.name,
            email: admin.email,
            token,
        })
    }
    else{
        res.status(400)
        throw new Error('Invalid email or password')
    }
    
  
})

// ========================accept trainer===============
const acceptTrainer = async (req,res) =>{
    console.log('hello worls');
    const trainerId=req.params.id
    try {
        await Trainer.findByIdAndUpdate(trainerId,{permission:true},{new: true})
        res.json({message:"accepted"})
    } catch (err) {
        res.json(err)
    }
}

// ====================get all users======================
const getAllUser =async (req,res) =>{
try {
    const Users = await User.find({})
    res.json(Users)
    
} catch (error) {
    res.json("no user")
}
}

// ====================get all trainers======================
const getAllTrainer =async (req,res) =>{
    
    try {
        const Trainers = await Trainer.find({})
        res.json(Trainers)
        
    } catch (error) {
        res.json("no Trainers")
    }
    }

    // ========================Block user===============
const letBlockUser = async (req,res) =>{
    console.log('hello worls');
    const userId=req.params.id
    const Users = await User.findOne({_id:userId})
    console.log(Users);
    try {
        if(Users.block==true){
            
            await User.findByIdAndUpdate(userId,{block:false},{new: true})
        res.json({message:"Un-blocked"})
        }else{

            await User.findByIdAndUpdate(userId,{block:true},{new: true})
            res.json({message:"blocked"})
        }
    } catch (err) {
        res.json(err)
    }
}



// ========================Block trainer===============
const letBlockTrainer = async (req,res) =>{
    console.log('hello worls');
    const trainerId=req.params.id
    const trainer = await Trainer.findOne({_id:trainerId})
    try {
        if(trainer.block==true){
            
            await Trainer.findByIdAndUpdate(trainerId,{block:false},{new: true})
        res.json({message:"Un-blocked"})
        }else{

            await Trainer.findByIdAndUpdate(trainerId,{block:true},{new: true})
            res.json({message:"blocked"})
        }
    } catch (err) {
        res.json(err)
    }
}

// ====================================ADMIN POST WORKOUT====================

const adminPostWorkout = async(req,res) =>{
   
    const {week,day,exercise,description} = req.body


    try {
        const ppl= await adminWorkout.create({
            week,day,exercise,description 
        })
        res.json(ppl)
    } catch (error) {
        res.json(error)
    }
}

// =============================  get workout===============================
const getWorkout = async (req,res)=>{
    try {
    const response = await adminWorkout.aggregate([
        {
            $group:{
                _id:{
                    week:'$week',
                    day:'$day'
                }
                ,
                data:{
                    $push:{
                        // week:'$week',
                        // day:'$day',
                        exercises:'$exercise',
                        description:'$description'
                    }
                }
            }
        }
    ])

    // console.log(response[1].data)
    
    res.json(response)
} catch (error) {
    res.json(error)
}
}

// ===============================Post Image==================

// export const PostImage =async (req,res) =>{
// try {
//     const result = await cloudinary.v2.uploader.upload(req.file.image,{
        
//     });
//     // Create new user
//     let user = new Image({
//         name: req.body.name,
//         avatar: result.secure_url,
//         cloudinary_id: result.public_id,
//       });
//       // Save user
//       await user.save();
//       res.json(user);
// } catch (error) {
//     console.log(error);
// }
// }


export const  getUserCount = async (req,res) => {
try {
    const userCount = await User.count({})
    res.json(userCount)
} catch (error) {
    res.json(error.message)
}
}

export const  getTrainerCount = async (req,res) => {
    try {
        const trainerCount = await Trainer.count({})
        res.json(trainerCount)
    } catch (error) {
        res.json(error.message)
    }
    }


    export const  getVideoCount = async (req,res) => {
        try {
            const videoCount = await trainerWorkout.count({})
            res.json(videoCount)
        } catch (error) {
            res.json(error.message)
        }
        }

        // ======================get application================

        export const getApplication= async (req,res) =>{

            const application = await Trainer.find({permission:false})
            try {
                if (application) {
                    res.json(application)
                }
                else{
                    res.json({
                        msg:"no new application",
                        status:true
                    })
                }
               
            } catch (error) {
                console.log(err);
            }
        }

// =======================================APPROVE TRAINER==========================

            export const approveTrainer= async(req,res) =>{
                console.log('what yhe hell!!!!!!!!!');
                const trainerId = req.params.id
                const trainer = await Trainer.findById({_id:trainerId})
                        console.log(trainer.permission);
                try {
                    if(trainer.permission === false)
                    {
                        await Trainer.findByIdAndUpdate(trainerId,{permission:true},{new: true})
                        res.json({
                            message:"Approved",
                            status:true
                        })
                    }
                } catch (error) {
                    res.json({
                        message:'somethng went wrong',
                        status:false
                    })
                }


            }

// ===================================================================================



// =======================================DENY TRAINER==========================

export const denyTrainer= async(req,res) =>{
    const trainerId = req.params.id
    const trainer = await Trainer.findById({_id:trainerId})
console.log(trainer);
    try {
        if(trainer)
        {
            await Trainer.findByIdAndDelete({_id:trainerId})
            res.json({
                message:"removed",
                status:true
            })
        }
    } catch (error) {
        res.json({
            message:'somethng went wrong',
            status:false
        })
    }


}

// ===================================================================================

export {registerAdmin,loginAdmin,acceptTrainer,getAllUser,getAllTrainer,letBlockUser,letBlockTrainer,adminPostWorkout,getWorkout}