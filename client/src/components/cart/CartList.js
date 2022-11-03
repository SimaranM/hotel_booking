
import React, { useState, useEffect } from "react";
import "../cart/cart.css";
import { Link } from "react-router-dom";


const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (_id) => {
    const arr = cart.filter((property) => property._id !== _id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((property) => (ans += property.amount * property.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <section className="property_main">
      <div className="cartItem">
        {cart.map((property) => (
          // <div className="cart_box cart_cards" key={property._id}>
          //   <div className="cart_img">
          //     <img src={property.images} alt="" />
          //   </div>
          //   <div>
          //     <span>{property.price}</span>
          //     <button onClick={() => handleRemove(property._id)}>Remove</button>
          //   </div>
          // </div>
          <div className="searchItem">
            <img
              src={property.images}
              className="siImg"
            />
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
                {/* <i className="fas fa-cart-plus addButton" onClick={() => handleClick(property)} ></i> */}
                <button>{property.rating}</button>
               
                <i class="fa fa-times" aria-hidden="true" onClick={() => handleRemove(property._id)}></i>
              </div>
              <div className="siDetailTexts">
                <span className="siPrice">{property.price}</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <div className="addcartbtn">
                  {/* <button className="addButton" onClick={() => handleClick(property)}>Add to Cart</button> */}
                  <Link to="/property/hotelDetails" target="_blank" >
                    <button className="siCheckButton">See availability</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cart;