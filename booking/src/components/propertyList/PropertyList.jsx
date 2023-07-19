import React from "react";
import "./propertyList.css";
import hotel1 from "../../images/hotel1.jpg";
import hotel2 from "../../images/hotel2.jpg";
import hotel3 from "../../images/hotel3.jpg";
import hotel4 from "../../images/hotel4.jpg";
import hotel5 from "../../images/hotel5.jpg";
import hotel6 from "../../images/hotel6.jpg";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img src={hotel1} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={hotel2} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={hotel3} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={hotel4} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={hotel5} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={hotel6} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
