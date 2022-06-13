import mongoose from 'mongoose'

const trainerWorkoutSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true
  },
  description:{
      type:String,
      required:true
  },
  price:{
      type:Number,
      required:true
  },
  week:{
    type:Number,
  
},
  trainerId: {type:mongoose.Schema.ObjectId,},


  previewUrl:{
    type:String,
    // required:true,
  },

  previewId:{
    type:String,
    // required:true,
  },

  videoId:{
    type:String,
    required:true,
  },
  videoUrl:{
    type:String,
    required:true,
  }
 
});
const trainerWorkout =  mongoose.model("trainerWorkout", trainerWorkoutSchema);
export default trainerWorkout