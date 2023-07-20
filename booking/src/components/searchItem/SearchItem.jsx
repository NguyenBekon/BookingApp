import React from "react";
import "./searchItem.css";
import hotel13 from "../../images/hotel13.jpg";
import { Link } from "react-router-dom";
import { id } from "date-fns/locale";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img src={hotel13} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">Studio Apartment with Air condition</span>
        <span className="siFeatures">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </span>
        <span className="siCancleOp">Free cancellation</span>
        <span className="siCancleOpSubtitle">
          You can cancle later, so look in this great price today !
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>9.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$123</span>
          <span className="siTaxOp"></span>
          <Link to={`/hotels/${id}`}>
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
