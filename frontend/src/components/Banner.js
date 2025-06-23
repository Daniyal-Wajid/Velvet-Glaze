import React from "react";
import bannerImg from "../assets/banner.png";
import "../styles/Banner.css";

function Banner() {
  return (
    <div className="banner">
      <img src={bannerImg} alt="Velvet Glaze Banner" className="banner-img" />
      <div className="banner-text">
        <h1>Now Available</h1>
        <p>The summer drink inspired doughnuts, part of the create your own box.</p>
        <a href="/menu" className="banner-cta">Order Now &rarr;</a>
      </div>
    </div>
  );
}

export default Banner;