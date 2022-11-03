const {Schema ,model, default: mongoose}=require('mongoose');
const{Property}=require("./property");
const {User}=require("./user");

const bookingDetailsSchema=new Schema({
    _propertyId:{
        type:mongoose.Schema.Types.ObjectId ,
        ref:"Property",
        required:true
    
    },
    //roomId:{type:String,required:true},
    _userId:{
        type:mongoose.Schema.Types.ObjectId ,
        ref:"User",
        required:true
    
    },
   /* noOfRooms:{
        type:Number,
        required:true
    },
    amount:{
         type:Number,
         required:true
    }
   */
}) 
const Cart=model("Cart",cartSchema);

module.exports={
    Cart,
}