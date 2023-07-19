import React from "react";
import "./featuredProperties.css";
import hotel7 from "../../images/hotel7.jpg";
import hotel8 from "../../images/hotel8.jpg";
import hotel9 from "../../images/hotel9.jpg";
import hotel10 from "../../images/hotel10.jpg";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img alt=" " src={hotel7} className="fpImg" />
        <span className="fpName">Name</span>
        <span className="fpCity">City-Address</span>
        <span className="fpPrice">Price</span>
        <div className="fpRating">
          <button>9.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img alt=" " src={hotel8} className="fpImg" />
        <span className="fpName">Name</span>
        <span className="fpCity">City-Address</span>
        <span className="fpPrice">Price</span>
        <div className="fpRating">
          <button>9.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img alt=" " src={hotel9} className="fpImg" />
        <span className="fpName">Name</span>
        <span className="fpCity">City-Address</span>
        <span className="fpPrice">Price</span>
        <div className="fpRating">
          <button>9.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img alt=" " src={hotel10} className="fpImg" />
        <span className="fpName">Name</span>
        <span className="fpCity">City-Address</span>
        <span className="fpPrice">Price</span>
        <div className="fpRating">
          <button>9.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
