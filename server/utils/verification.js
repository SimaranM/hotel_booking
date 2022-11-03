const jwt=require('jsonwebtoken');
const {errorHandler}=require("./errorHandler")

const verifyToken = (req, res, next) => {
    try {
      const token = req.cookies?.token;
      console.log(token)
      if (!token) throw new Error("Forbidden");
      const payload = jwt.verify(token, process.env.JWT_TOKEN);
      console.log(payload)
      req.user = payload;
      next();
    } catch (error) {
      error.statusCode = 403;
      next(error);
    }
  };

const verifyUser=(req,res,next)=>{
    verifyToken(req,res,next)
        if(req.user.id===req.params?.id || req.user.isAdmin) {
        next()
        }else{
          return next(errorHandler(403,"Please Login"));
        }   
}
const verifyOwner=(req,res,next)=>{
    // verifyToken(req,res,next)
        
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
