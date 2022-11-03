
const cloudinary=require("../cloudinary/cloudinary")

  
const uploadedImage =async(req,res,next)=>
  
  {
    const {image}=req.body;
     await cloudinary.uploader.upload(
    image,
    {
        upload_preset: "staywind-property",
        allowed_formats: ["png", "jpg", "jpeg", "svg", "ico", "jfif", "webp"],
    },

    function (error, result) {
      if (error) {
        console.log(error);
      }
      console.log(result);
    }
  );
  try {
    res.status(200).json(uploadedImage);
  } catch (err) {
    console.log(err);
  }
}
module.exports=uploadedImage;
