import mongoose from "mongoose";

const adminWalletSchema = mongoose.Schema({
    productId:{
        type: String,
    required:true
    },
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
    price:{
        type: Number,
    required:true
    },
    trainerPrice:{
        type: Number,
    required:true
    },
    adminPrice:{
        type: Number,
    required:true
    },
    paymentStatus:{
        type:Boolean,
        required:true,
        default:false
    },


}
,{timestamps:true}
)

const adminWallet = mongoose.model("adminWallet",adminWalletSchema);
export default adminWallet