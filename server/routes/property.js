const express=require('express');
//const multer=require('multer');


/*const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
const upload = multer({ storage })
*/
const {
    addNewProperty,
    updateProperty,
    getProperties,
    getProperty,
    deleteProperty,
}=require("../controllers/property");
const{verifyOwner}=require("../utils/verification")

const propertyRouter=express.Router();

propertyRouter.route("/").get(getProperties)
propertyRouter.route("/uploadProperty").post(verifyOwner, addNewProperty);
propertyRouter.route("/:id").get(getProperty).put(verifyOwner, updateProperty).delete(verifyOwner, deleteProperty);



module.exports={
    propertyRouter,
}