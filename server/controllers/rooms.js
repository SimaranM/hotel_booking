const{Room}=require('../models/rooms');
const {Property}=require('../models/property');


const addNewRoom = async(req,res,next) =>{
    try{
        const {body} =req;
        const room=await Room.create(body);
        res.json(room);
    }
    catch(error){
        res.json({message:error.message});
    }

};

const updateRoom = async(req,res,next) =>{
    try{
        const{                            //get 'id' to find the property... Destructure the req
            params:{id},body
        } =req;  
        
        const room=await Room.findByIdAndUpdate(id,body);
        res.json(room);
    }
    catch(error){
        res.json({message:error.message});
    }
    
    
}
const getRooms = async(req,res,next) =>{           
    try{
        const rooms=await Room.find({});
        res.json(rooms);
    }
    catch(error){
        res.json({message:error.message});
    }
    
}

const getRoom = async(req,res,next) =>{
    try{
        const{                            
        } =req;  
        
        const room=await Room.findById(id);
        res.json(room);
    }
    catch(error){
        res.json({message:error.message});
    }
    
}

const deleteRoom = async(req,res,next) =>{
    try{
        const{                            
            params:{id}
        } =req;  
        
        await Room.findByIdAndDelete(id);
        res.json("Room Deleted");
    }
    catch(error){
        res.json({message:error.message});
    }
    
    
    
}


module.exports ={
    addNewRoom,
    updateRoom,
    getRooms,
    getRoom,
    deleteRoom

}
