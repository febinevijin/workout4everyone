import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className="banner-container mt-1">
        <img src="/images/Gymbanner.jpg" alt="" className="bannerImg" />
        <div className="inside-container">
          <h3 className="text-1">Take Your First Step</h3>

          <button className="button-64" role="button">
          
           <span className="text"><Link to='/choosepage' >Get Start</Link></span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
