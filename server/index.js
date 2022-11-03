const dotenv=require('dotenv')
dotenv.config();
require('./db');
const express=require('express');



const {userRouter}=require("./routes/user");
const {propertyRouter}=require("./routes/property");
const {authRouter}=require("./routes/auth");
const {errorHandler}=require("./utils/errorHandler")
const cors =require('cors');
const cloudinary=require("./cloudinary/cloudinary");

require('./controllers/user');
require('./controllers/property');
require('./controllers/auth');

const app=express();

const port=process.env.PORT || 3200;

//middlewares
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({extended:true,limit:'50mb'}))  //check1
app.use(cors());

app.get("/",(req,res)=>{
    res.send("stay wind");
})
app.use("/users",userRouter);
app.use("/property",propertyRouter);
app.use("/auth",authRouter);


app.use((err,req,res,next)=>{
    return next(errorHandler(400,err.message));
})

app.listen(port,()=>{
    
    console.log(`Stay wind is running on port ${port}`);
})