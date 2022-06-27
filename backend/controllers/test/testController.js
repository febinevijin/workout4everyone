import nodemailer from 'nodemailer'
import multer from 'multer'
import fs from 'fs'
import cloudinary from '../../util/cloudinary.js'


export const sendEmail = async (req,res)=>{

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth:{
            user: "workoutforeveryone1@gmail.com",
            pass: "Febin@2000"
        }
    })

    let details = {
        from: "workoutforeveryone1@gmail.com",
        to: "15febinevijin@gmail.com",
        subject:"testing our nodemailer",
        text: "test first email"

    }

    mailTransporter.sendMail(details,(err)=>{
        if(err){
            console.log("it has an errror",err);
        }
        else{
            console.log('email has sent');
        }
    })
}






  