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

  trainerName:{
    type: String,
required:true
},
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
  },
  user:[{type:String}]
 
});
const trainerWorkout =  mongoose.model("trainerWorkout", trainerWorkoutSchema);
export default trainerWorkout