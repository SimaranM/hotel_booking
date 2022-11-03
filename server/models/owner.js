const {Schema ,model}=require('mongoose');

const ownerSchema=new Schema({
  
    ownerId:{type:String, unique:true,required:true},
    email:{type:String, unique:true, required:true},
    password:{type:String,required:true, select:false},
    firstName:{type:String},
    lastName:{type:String},
    address:{type:String},
    pincode:{type:Number},
    country:{type:String},
    phoneNumber:{type:Number},
    properties:{type:[String]}
});
const Owner=model("Owner",ownerSchema);

module.exports={
    Owner,
}