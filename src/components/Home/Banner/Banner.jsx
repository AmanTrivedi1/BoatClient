import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h4 className="tagline__start">A Voyage To</h4>
          <h1>NIRVANA</h1>
          <p>
            Catch a glimpse of the range of boAt Lifestyle products in the
            offering and choose your way of Plugging Into Nirvana!
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} />
      </div>
    </div>
  );
};

export default Banner;
