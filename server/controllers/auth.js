const {User}=require("../models/user");
//const {Owner}=require("../models/owner");
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const { errorHandler } = require("../utils/errorHandler");
const { updateUser } = require("./user");




const signup= async (req,res,next) => {

            //console.log(req.body);
            try{


                //check whether the user already exist 
                const found=await User.findOne({email:req.body.email})
                if(found)
                throw new Error("user already exist")
                 
                //use bcrypt to hash the password
        
                const hashedPassword=await bcrypt.hash(req.body.password, 5)

                console.log(hashedPassword);


                //get the values from the registration page
                const newUser=await User.create({
                    firstName:req.body.firstname,
                    lastName:req.body.lastname,
                    email:req.body.email,
                    password:hashedPassword

                })
               //delete newUser.password;
            //if not save the new user
            //const token=jwt.sign(newUser.toJSON(),process.env.JWT_TOKEN)
            //res.json({token})
            res.status(201).send();
        
            }
            catch(error){
                res.status(500).send(error.message || "Couldn't create the user")  
            }


 }

const login=async (req,res,next) =>{
    try{
       
        const  user=await User.findOne({email:req.body.email})
        

    if(!user)
    return next(errorHandler(404,"User not found"))

    console.log(user);
    const verifyPassword=await bcrypt.compare(req.body.password,user.password)  //check the password entered with the password in the database
    
    if(!verifyPassword) 
    return next(errorHandler(400,"Invalid Email id or Password"));
    
    
    const token=jwt.sign(user.toJSON(),process.env.JWT_TOKEN)
   // res.json({token})


   res.status(200).json({data:token,message:"User logged successfully"});

    }
    catch(error){
        res.status(500).send({message:error.message});
    }
};

module.exports={
    login,
    signup,
}