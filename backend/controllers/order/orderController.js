import Trainer from "../../models/trainer/trainerModel.js";
import User from "../../models/user/userModel.js";
import trainerWorkout from "../../models/trainer/trainerWorkoutModel.js";
import Order from "../../models/order/orderModel.js";
import adminWallet from "../../models/admin/adminWallet.js";
import trainerWallet from "../../models/trainer/trainerWallet.js";



export const placeOrder = async (req,res)=>{


        try {
            const user = await User.findById(req.user.id)
                if(user.myWorkout.includes(req.body.productId))
                {
                    console.log('allready buyed');
                    res.status(401).json({
                        msg:"the product is allready buyed",
                        status:false
                    })
                }else{
                    let Total = req.body.price
                    let trainerTotal = Total-100;
                    let adminTotal = Total-trainerTotal

                    await adminWallet.create({
                        productId:req.body.productId,
                        price: req.body.price,
                        trainerPrice:trainerTotal,
                        adminPrice:adminTotal,
                        workoutName:req.body.workoutName,
                        trainerName:req.body.trainerName,
                        trainerId: req.body.trainerId,
                        userId:req.user.id,
                    })

                    await trainerWorkout.findOneAndUpdate(
                        { _id: req.body.productId },
                        { $push: { user: req.user.id } }
                        
                    )


                   


            await Order.create({
                productId:req.body.productId,
                price: req.body.price,
                workoutName:req.body.workoutName,
                trainerName:req.body.trainerName,
                trainerId: req.body.trainerId,
                userId:req.user.id,
            })

            
                if(user)
                {
                    user.myWorkout.push(req.body.productId)
                }
               await user.save()

               res.json({
                msg:"the product is  buyed",
                status:true
            })
            }
        } catch (error) {
            console.log(error);
        }
    
}


export const distributeMoney = async (req,res) =>{
const {orderId , trainerPrice} = req.body
// console.log(orderId , trainerPrice);
try {

 
  
    const adminOrder = await adminWallet.findById(orderId)

    // console.log(adminOrder);

    if (adminOrder.paymentStatus == false) {
        await adminWallet.findByIdAndUpdate(orderId,{paymentStatus:true},{new: true})
    }

    await trainerWallet.create({
       workoutName:adminOrder.workoutName,
       price:adminOrder.price,
       trainerPrice:adminOrder.trainerPrice,
       trainerId:adminOrder.trainerId,
       trainerName:adminOrder.trainerName,
       userId:adminOrder.userId
    })



res.json({status:true})
    
} catch (error) {
    console.log(error);
}

}