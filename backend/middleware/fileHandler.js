import cloudinary from "../util/cloudinary.js";
import fs from 'fs'
import path from "path";
import ErrorHandler from "../util/ErrorHandler.js";
import CatchAsyncError from "./CatchAsyncError.js";

export const uploadImageFile = async (image, next) => {
  try {
    const imgResult = await cloudinary.v2.uploader.upload(image, {
      folder: "videoUploads",
    });

    if (imgResult) {
      return imgResult;
    } else {
      console.log("image not uploaded");
    }
  } catch (error) {
    console.log(error);
  }
};

   


export const videoUploader = async (Video) => {
  try {

    let videoFile = Video;
    await videoFile.mv(`./video/${Video.name}`, (err) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        console.log("success video upload");
      }
    });

    const fName = Video.name.split(".")[0];
const res = await  cloudinary.v2.uploader.upload(`./video/${Video.name}`, 
      { resource_type: "video", 
      folder:'videoUploads',
        public_id: `${Date.now()+fName}`,
        chunk_size: 6000000,
        eager: [
          { width: 300, height: 300, crop: "pad", audio_codec: "none" }, 
          { width: 160, height: 100, crop: "crop", gravity: "south", audio_codec: "none" } ],                                   
        eager_async: true,
        eager_notification_url: "https://mysite.example.com/notify_endpoint"
       },
    //    function(error, result) {
    //         console.log(result, error)
    //         if(result){
           
    //             // fs.unlink(`./video/${Video.name}`, (err) => {
    //             //   if (err) throw err;
    //             //   console.log('path/file.txt was deleted');
        
    //             // });
    //         }
           
       
    //     }
        
        )

        fs.unlink(`./video/${Video.name}`, (err) => {
            if (err) throw err;
            console.log('path/file.txt was deleted');
  
          });




                // fs.unlink(`./video/${Video.name}`, (err) => {
                //   if (err) throw err;
                //   console.log('path/file.txt was deleted');
        
                 
                // });
      
                console.log('uploaded to cloudinary');
                return res

  } catch (error) {
    console.log(error);
  }
};




export const uploadVideoFile =async (videofile, next) => {
    try {
    
        await videofile.mv(`./video/${videofile.name}`, err => {
            if (err) {
                return next(new ErrorHandler("video file uploading fail0000", 500))
            }
        })
        const fName = videofile.name.split(".")[0];    
        console.log(fName);
       let data = await cloudinary.v2.uploader.upload(`./video/${videofile.name}`, {
        resource_type: "video",
            folder: "videoFiles"
        });


        if (data) {
            fs.unlink(`./video/${videofile.name}`, (err) => {

                if (err) return next(new ErrorHandler("video file uploading fail8888888888", 500))
            })
            data = {
                public_id:data.public_id,
                url:data.secure_url
            }
            return data;
        } else {
            return next(new ErrorHandler("video file uploading fail222222222", 500))
        }


    } catch (error) {
        return next(new ErrorHandler("video file uploading fail111111111", 500))
    }
}