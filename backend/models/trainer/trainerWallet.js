import mongoose from "mongoose";

const trainerWalletSchema = mongoose.Schema({
    // productId:{
    //     type: String,
    // required:true
    // },
    userId:{
        type: String,
    required:true
    },
    workoutName:{
        type: String,
        required:true
    
    },
    trainerName:{
        type: String,
    required:true
    },
    trainerId:{
        type: String,
    required:true
    },
    // price:{
    //     type: Number,
    // required:true
    // },
    trainerPrice:{
        type: Number,
    required:true
    },
    // orderId:{
    //     type:String,
    //     // required:true
    // }
    // adminPrice:{
    //     type: Number,
    // required:true
    // },
   


}
,{timestamps:true}
)

const trainerWallet = mongoose.model("trainerWallet",trainerWalletSchema);
export default trainerWallet