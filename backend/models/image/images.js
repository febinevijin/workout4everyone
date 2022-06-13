import mongoose from 'mongoose'
const imageSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
  cloudinary_id: {
    type: String,
  },
});
const Images =  mongoose.model("Images", imageSchema);
export default Images