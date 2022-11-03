const jwt=require('jsonwebtoken');
const {errorHandler}=require("./errorHandler")

const verifyToken=(req,res,next)=>{

    const token= req.headers['token']  //get the authorization part from header of the req
    //const token=authHeader && authHeader.split(' ')[1] 
    //console.log(authHeader);         //check if there is a authheader .token is the second value (BEARER token) in the authHeader
    //const token=req.headers.access_token;
    console.log(token);
    if(!token){
        return next(errorHandler(401,"You are not authenticated"));
    }
    jwt.verify(token,process.env.JWT_TOKEN,(error,user)=>{
        if(error) return next(errorHandler(403,"Invalid Token"));
        req.user=user;
        next();
    })
}


const verifyUser=(req,res,next)=>{
    verifyToken(req,res,next)
        if(req.user.id===req.params.id || req.user.isAdmin) {
        next()
        }else{
          return next(errorHandler(403,"Please Login"));
        }   
}
const verifyOwner=(req,res,next)=>{
    verifyToken(req,res,next)
        
    if(req.user.id===req.params.id || req.user.isAdmin) {
        next()
        }else{
          return next(errorHandler(403,"You are not authorized"));
        }
}
const verifyAdmin=(req,res,next)=>{

    verifyToken(req,res,next);
    if(req.user.isAdmin){
        next()
    }else{
        return next(errorHandler(403,"Please Login as an Admin"));
    }

}
module.exports={
    verifyToken,
    verifyUser,
    verifyOwner,
    verifyAdmin
}
