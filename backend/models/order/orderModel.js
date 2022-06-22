import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
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

}
,{timestamps:true}
)

const Order = mongoose.model("Order",orderSchema);
export default Order