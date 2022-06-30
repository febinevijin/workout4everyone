import express  from"express";
import cors  from "cors";
import connectDB  from "./config/db.js";
import dotenv  from "dotenv";
import path from "path"
import cookieParser  from "cookie-parser"
import fileUpload from "express-fileupload";
import bodyParser from "body-parser";


// import { notFound,errorHandler } from "./middleware/errorMiddleware.js";

import adminRoutes from './routes/admin/adminRoutes.js'
import userRoutes from './routes/user/userRoutes.js'
import trainerRoutes from './routes/trainer/trainerRoutes.js'
import orderRoutes from './routes/order/orderRoutes.js'
import productRoutes from './routes/admin/productRoutes.js'
import { authenticatedUser } from "./middleware/authTrainer.js";
import testRoutes from './routes/test/testRoutes.js'



connectDB();

const app = express();
app.use(cookieParser());

//body parser
app.use(express.json({limit: '50mb'}))

app.use(express.urlencoded({limit:'50mb' , extended:true}))

app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));
//==============//

// app.use(
//   cors({
//     origin: '*',
//     methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
//     credentials: true,
//   })
// );



const corsOptions = {
  credentials: true, 
  origin: "https://workout4everyone.ml/"
}

app.use(cors(corsOptions))

//error handling middleware
// app.use(notFound)
// app.use(errorHandler)
//==================//


// app.get("/", (req, res) => {
 
//   res.send("API is running...");
// });


// ================USER=============
app.use('/api/users',userRoutes)

// =====================================


// =================ADMIN=================
app.use('/api/admin',adminRoutes)
// ========================================


// ===============TRAINER================
app.use('/api/trainer',trainerRoutes) 
// =======================================

// ====================ORDERS=================

app.use ('/api/order',orderRoutes)

// ================================================


// =======================TEST PURPOSE=================
app.use ('/api/test', testRoutes)
// =========================================================

app.get('/api/config/paypal',(req,res)=>{


 
  try {
    const paypalId = process.env.PaypalClientId
    console.log('user is present');
  
    res.status(201).json(paypalId)
    
  } catch (error) {
    res.status(500).json({
      msg:"something error"
    })
  }

}) 
const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../frontend/build')))

//   app.get('*', (req, res) =>
//     res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'))
//   )
// } else {
//   app.get('/', (req, res) => {
//     res.send('API is running....')
//   })
// }





dotenv.config();
const PORT = process.env.PORT || 5000; 





app.listen(PORT, console.log(`server started at port ${PORT}`));
