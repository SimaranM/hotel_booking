const {Schema ,model, default: mongoose}=require('mongoose');
const{Property}=require("./property");
const {User}=require("./user");

const cartSchema=new Schema({
    _propertyId:{
        type:mongoose.Schema.Types.ObjectId ,
        ref:"Property",
        required:true
    
    },
    //roomId:{type:String,required:true},
    _userId:{
        type:mongoose.Schema.Types.ObjectId ,
        ref:"User",
        
    
    },
   
}) 
const Cart=model("Cart",cartSchema);

module.exports={
    Cart,
}