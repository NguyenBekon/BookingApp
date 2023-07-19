import React from "react";
import "./featured.css";
import img1 from "../../images/Geiranger.jpg";
import img2 from "../../images/Moher.jpg";
import img3 from "../../images/Monteverde.jpg";
import img4 from "../../images/Na Pali.jpg";
import img5 from "../../images/Reynisfjara.jpg";
import img6 from "../../images/Salar de Uyuni.jpg";
import img7 from "../../images/Skogafoss.jpg";
import img8 from "../../images/Tegalalang.jpg";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src={img1} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Lorem</h1>
          <h2>Lorem ipsum</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={img2} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Lorem</h1>
          <h2>Lorem ipsum</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={img3} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Lorem</h1>
          <h2>Lorem ipsum</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={img4} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Lorem</h1>
          <h2>Lorem ipsum</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={img5} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Lorem</h1>
          <h2>Lorem ipsum</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={img6} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Lorem</h1>
          <h2>Lorem ipsum</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={img7} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Lorem</h1>
          <h2>Lorem ipsum</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={img8} alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Lorem</h1>
          <h2>Lorem ipsum</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
