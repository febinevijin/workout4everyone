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





export const videoo = async (req,res)=>{

    const videoStorage = multer.diskStorage({
        destination: 'videos', // Destination to store video 
        filename: (req, file, cb) => {
            cb(null, file.fieldname + '_' + Date.now() 
             + path.extname(file.originalname))
        }
   });
    
  const upload = multer({
    storage: videoStorage,
    limits: {
      fieldNameSize: 200,
      fileSize: 300 * 1024 * 1024,
    },
   
  }).single("video");

  upload(req, res, (err) => {
    if (err) {
      return res.send(err);
    }
    

    // SEND FILE TO CLOUDINARY
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    console.log(req.files.tempathFilePath);
    const  path  = req.files['video'].name; // file becomes available in req at this point

    const fName = req.files['video'].name.split(".")[0];
    cloudinary.v2.uploader.upload(
      path,
      {
        resource_type: "video",
        public_id: `VideoUploadss/${fName}`,
        chunk_size: 6000000,
        eager: [
          {
            width: 300,
            height: 300,
            crop: "pad",
            audio_codec: "none",
          },
          {
            width: 160,
            height: 100,
            crop: "crop",
            gravity: "south",
            audio_codec: "none",
          },
        ],
      },

      // Send cloudinary response or catch error
      (err, video) => {
        if (err) return res.send(err);

        fs.unlinkSync(path);
        return res.send(video);
      }
    );
  });
}
  