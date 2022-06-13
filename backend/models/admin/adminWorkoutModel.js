import mongoose from "mongoose";

const adminWorkoutShema = mongoose.Schema({
    week:{
        type:Number,
        required:true
    },
    day:{
        type:String,
        required:true
    },
   
    exercise:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
    },
    cloudinary_id: {
        type:String,
    }

})

const adminWorkout = mongoose.model("adminWorkout",adminWorkoutShema)

export default adminWorkout