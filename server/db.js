const mongoose=require('mongoose');

/*const connect=async () =>{
    try {
  await mongoose.connect(process.env.CONNECTION_STRING);
  console.log("connected to mongodb");
} catch (error) {
  throw error;
}
}
connect(); */

/*module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect(process.env.DB, connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};
 */
mongoose.connect(process.env.CONNECTION_STRING)
  
.catch((error)=>{
    console.log(error)
});

