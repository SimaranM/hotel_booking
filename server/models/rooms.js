const{Property}=require("./property");

const roomSchema=new Schema({
  
    desc:{type:String},
    images:{type:[String]},
    price:{type:Number},
    keywords:{type:[String], required:true},
    availableDate:{type:[Date]}
});
const Room=model("Room",roomSchema);

module.exports={
    Room,
}