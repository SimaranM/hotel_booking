const { User } = require("../models/user");
//const {Owner}=require("../models/owner");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { errorHandler } = require("../utils/errorHandler");
const { updateUser } = require("./user");




const signup = async (req, res, next) => {

    //console.log(req.body);
    try {


        //check whether the user already exist 
        const found = await User.findOne({ email: req.body.email })
        if (found)
            throw new Error("user already exist")

        //use bcrypt to hash the password

        const hashedPassword = await bcrypt.hash(req.body.password, 5)

        console.log(hashedPassword);


        //get the values from the registration page
        const newUser = await User.create({
            firstName: req.body.firstname,
            lastName: req.body.lastname,
            email: req.body.email,
            password: hashedPassword

        })
        const payload = {
            email: newUser.email,
            id: newUser._id,
            isAdmin: newUser.isAdmin,
            isOwner: newUser.isOwner
        }
        //delete newUser.password;
        //if not save the new user
        const token = jwt.sign(payload, process.env.JWT_TOKEN, { expiresIn: "500m" })
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 8
        }).json(payload)

    }
    catch (error) {
        res.status(500).send(error.message || "Couldn't create the user")
    }


}

const login = async (req, res, next) => {
    try {

        const user = await User.findOne({ email: req.body.email })


        if (!user)
            return next(errorHandler(404, "User not found"))


        const verifyPassword = await bcrypt.compare(req.body.password, user.password)  //check the password entered with the password in the database

        if (!verifyPassword)
            return next(errorHandler(400, "Invalid Email id or Password"));



        // res.json({token})
        const payload = {
            email: user.email,
            id: user._id,
            isAdmin: user.isAdmin,
            isOwner: user.isOwner
        }
        const token = jwt.sign(payload, process.env.JWT_TOKEN, { expiresIn: "500m" })
        console.log(token)
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 8
        }).json(payload)


    }
    catch (error) {
        console.log(error)
        res.status(500).send({ message: error.message });

    }
};

module.exports = {
    login,
    signup,
}