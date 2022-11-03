const {Property} =require("../models/property");
//const cloudinary=require("../controllers/cloudinary");

//const {uploadedImage}=require("./cloudinary");

const cloudinary=require("../cloudinary/cloudinary");


const addNewProperty = async(req,res,next) =>{
    //console.log(req.body.image);
    console.log("1");
    const {image}=req.body;
    const uploadedImage=await cloudinary.uploader.upload(image,
        {
          upload_preset: "staywind-property",
          allowed_formats: ["png", "jpg", "jpeg", "svg", "ico", "jfif", "webp"],
        },
    async function (error, result) {
          if (error) {
            console.log(error);
          }
          console.log(result);
          const property=await Property.create({
            name:req.body.name,
            type:req.body.type,
            location:req.body.location,
            address:req.body.address,
            pincode:req.body.pincode,
            country:req.body.country,
            keyword:req.body.keyword,
            images:[result.url]

        });
        res.json(property);
        })
    

};

const updateProperty = async(req,res,next) =>{
    try{
        const{                            //get 'id' to find the property... Destructure the req
            params:{id},body
        } =req;  
        
        const property=await Property.findByIdAndUpdate(id,body);
        res.json(property);
    }
    catch(error){
        res.json({message:error.message});
    }
    
    
}
const getProperties = async(req,res,next) =>{            //get all the properties
    try{
        const page=parseInt(req.query.page)-1 ||0; //for pagination
        const limit=parseInt(req.query.limit) || 6;  //set limit for each items in the page
        const search=req.query.search||"";
        let sort=req.query.sort||"price";
        let keyword=req.query.keyword ;
        //let allProperties=[];

       /* const keywordOptions=[
            "wedding",
            "kid friendly",
            "luxurious",
            "breakfast"
        ]*/
             //sort
            let sortBy={};
             req.query.sort?(sort=req.query.sort.split(",")):(sort=[sort]);
           
 
             if(sort[1]){    //user specify sorting order
                 sortBy[sort[0]]=sort[1];
             }else{
                 sortBy[sort[0]]='asc';
             }
            //check with keyword
            if (!keyword) {
                allProperties = await Property.find({}).sort(sortBy)//.skip(page*limit);
                return res.status(200).json(allProperties)
            } else {
                 keyword = req.query.keyword.split(",")
                 allProperties = await Property.find().where("keyword").in(keyword).sort(sortBy)//.skip(page*limit);;
                 res.status(200).json(allProperties)
            }
           
            /*const allProperties= await Property.find({location:{$regex:search,$options:"i"}})
            .where(keyword).in(keyword).sort(sortBy).skip(page*limit)
             */
            //res.status(200).json(allProperties)
    }
    catch(error){
        res.status(500).json({message:error.message});  //add error:true as param
    }
    
}
//get specific property
const getProperty = async(req,res,next) =>{
    try{
        const{                            //get 'id' to find the property
            params:{id},
        } =req;  
        
        const property=await Property.findById(id);
        res.json(property);
    }
    catch(error){
        res.json({message:error.message});
    }
    
}

const deleteProperty = async(req,res,next) =>{
    try{
        const{                            //get 'id' to find the property
            params:{id}
        } =req;  
        
        await Property.findByIdAndDelete(id);
        res.json("Property Deleted");
    }
    catch(error){
        res.json({message:error.message});
    }
    
    
    
}


module.exports ={
    addNewProperty,
    updateProperty,
    getProperties,
    getProperty,
    deleteProperty

}
