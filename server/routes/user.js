const express=require('express');
const userRouter=express.Router();
const {verifyUser,verifyAdmin}=require('../utils/verification')

const {
    getUsers,
    updateUser,
    getUser,
    deleteUser,
}=require("../controllers/user");



userRouter.route("/:id",verifyUser).get(getUser).put(updateUser).delete(deleteUser);

userRouter.get("/", verifyAdmin,getUsers)


module.exports={
    userRouter,
}




