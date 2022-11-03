const {Schema ,model}=require('mongoose');

const userSchema=new Schema({
  
    
    email:{type:String, unique:true, required:true},
    password:{type:String,required:true},
    firstName:{type:String},
    lastName:{type:String},
    address:{type:String},
    pincode:{type:Number},
    country:{type:String},
    phoneNumber:{type:Number},
    isAdmin:{type:Boolean,default:false},
    isOwner:{type:Boolean,default:false}
    
});
const User=model("User",userSchema);

module.exports={
    User,
}