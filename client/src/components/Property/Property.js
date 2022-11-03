import React, { useState } from "react";
import "./property.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../axiosClient";



const Property = () => {

  const [error, setError] = useState("");

  const [data, setData] = useState({
    name: "",
    type: "",
    location: "",
    pincode: "",
    address: "",
    country: "",
    //images:[""],
    rating: ""
  });
  const navigate = useNavigate();

  const [images, setImages] = useState([""]);
  const [url, setUrl] = useState("");

  const uploadImage = (e) => {
    const image = e.target.files[0];
    console.log(image);
    setImages(image);
    previewImages(image)
  }
  const previewImages = (image) => {
    const reader = new FileReader();
    reader.readAsDataURL(image);

    reader.onloadend = () => {
      setUrl(reader.result);

    }
  }

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post("http://localhost:3200/property/uploadProperty",
      {
        ...data,
        image: url,

      });

    try {

      //const  {data:res} = await axios.post("http://localhost:3200/uploadProperty", data);

      console.log(result.data);
      navigate("/");

    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }

  }


  return (
    <section className="upload-property_main">

      <div className="upload-property_container">
        <div className="upload-form_container">
          <div className="left">
            <h1> Upload the details Of Your Property</h1>
          </div>

          <div className="right">
            <form action="/property" method="POST" enctype="multipart/form-data" className="upload-property-form">
              <label className="listproperty">
                Property Name
                <input type="text" name="name" placeholder="Enter the name of the property" onChange={handleChange} className="propertyinput" />
              </label>
              <label className="listproperty">
                Property Type
                <input type="text" name="type" placeholder="Hotel / Apartment / Cabin / Others" onChange={handleChange} className="propertyinput" />
              </label>
              <label className="listproperty">
                Location
                <input type="text" name="location" placeholder="Location of the Property" onChange={handleChange} className="propertyinput" />
              </label>
              <label className="listproperty">
                Address
                <input type="text" name="address" placeholder="Address" onChange={handleChange} className="propertyinput" />
              </label>
              <label className="listproperty">
                ZipCode
                <input type="text" name="pincode" placeholder="pincode" onChange={handleChange} className="propertyinput" />
              </label >
              <label className="listproperty">
                Country
                <input type="text" name="country" placeholder="Country" onChange={handleChange} className="propertyinput" />
              </label>

              <label className="listproperty">
                Features
                <input type="text" name="keyword" placeholder="Enter main features" onChange={handleChange} className="propertyinput" />
              </label>

              <label className="listproperty">
                Upload Images
                <input id="images" type="file" multiple name="images" onChange={uploadImage} className="propertyinput" />
              </label>

              <button className="upload-btn" type="submit" onClick={handleSubmit}> Upload</button>

            </form>
            <div className="imagePreview">
              <img src={url} alt="image of the property" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
export default Property