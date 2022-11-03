import React from "react";
import { Link } from "react-router-dom";
import "./searchItem.css";
// import CartExtra from "../searchItem/CartExtra";

const SearchItem = ({ property, handleClick }) => {
  // const { title, author, price, img } = property;
  // -------------------------

  // ----------------------
  return (

    <div className="searchItem">
      <div className="search_img">
        <img
          src={property.images}
          className="siImg"
        />
        {/* <i class="fa fa-heart" aria-hidden="true" onClick={() => handleClick(property)} ></i> */}
      </div>

      {/* {console.log(property.images)} */}
      <div className="siDesc">
        <h1 className="siTitle">{property.name} {property.location}</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        {/* <span className="siSubtitle">
          {property.images}
        </span> */}
        <span className="siFeatures">
          {property.keyword}
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <i class="fa fa-heart" aria-hidden="true" onClick={() => handleClick(property)} ></i>
          <button>{property.rating}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">${property.price}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <div className="addcartbtn">
            {/* <button className="addButton" onClick={() => handleClick(property)}>Add to Cart</button> */}
            <Link to="/property/hotelDetails">
              <button className="siCheckButton">See availability</button>
            </Link>
          </div>

          {/* ------------cart------------------- */}
          {/* <div className="cards cart_cards">
            <img
              src={img} alt=""
              className="siImg"
            />
            <div className="details">
              <p>{title}</p>
              <p>{author}</p>
              <p>Price - ${price}</p>
              <button onClick={() => handleClick(property)}>Add to Cart</button>
            </div>
          </div> */}


          {/* ------------cart------------------- */}

        </div>
      </div>
    </div>
  );
};

export default SearchItem;