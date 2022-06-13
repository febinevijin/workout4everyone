import mongoose from 'mongoose';
import bcrypt from 'bcrypt'

const trainerSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{ 
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true,

    },
    block:{
        type:Boolean,
        required:true,
        default:false
    },
    permission:{
        type:Boolean,
        required:true,
        default:false
    },
    trainerProof:{
        type:String,
        required:true,
    },
    trainerProfile:{
        type:String,
        required:true,
    },
})

trainerSchema.methods.matchPassword = async function( enteredPassword ){
    return await bcrypt.compare(enteredPassword, this.password)
}

trainerSchema.pre('save',async function (next){
    if(!this.isModified('password')){
        next()
    }


    const salt =await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt) 
})

const Trainer = mongoose.model('Trainer', trainerSchema)

export default Trainer 