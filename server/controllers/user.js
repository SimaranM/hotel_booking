
    const {User} =require("../models/user");

const updateUser = async(req,res,next) =>{
    try{
        const{                            
            params:{id},body
        } =req;  
        
        const user=await User.findByIdAndUpdate(id,body);
        res.json(user);
    }
    catch(error){
        res.json({message:error.message});
    }
    
    
}


const getUser = async(req,res,next) =>{
    try{
        const{    
            params:{id},body                       
        } =req;  
        
        const user=await User.findById(id);
        res.json(user);
    }
    catch(error){
        res.json({message:error.message});
    }
    
}

const deleteUser = async(req,res,next) =>{
    try{
        const{                           
            params:{id}
        } =req;  
        
        await User.findByIdAndDelete(id);
        res.json("Successfully deleted the user Account");
    }
    catch(error){
        res.json({message:error.message});
    }
    
    
    
}

const getUsers = async(req,res,next) =>{
    try{
        const users=await User.find({});
        res.json(users);
    }
    catch(error){
        res.json({message:error.message});
    }
    
}


module.exports ={
   getUsers,
    updateUser,
    getUser,
    deleteUser

}
