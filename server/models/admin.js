const {Schema ,model}=require('mongoose');

const userSchema=new Schema({
  
    
    email:{type:String, unique:true, required:true},
    password:{type:String,required:true, select:false},
    firstName:{type:String},
    lastName:{type:String},
    phoneNumber:{type:Number},
    isAdmin:{type:Boolean,default:true},
    isOwner:{type:Boolean,default:true}
});
const Admin=model("Admin",userSchema);

module.exports={
    Admin,
}