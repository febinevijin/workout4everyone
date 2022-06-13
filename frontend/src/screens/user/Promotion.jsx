import React from "react";
import "./Promotion.css";
import { Apartment, FitnessCenter, People, SportsKabaddi } from "@mui/icons-material";

const Promotion = () => {
  return (
    <>
      <div className="main-container text-center my-2">
        <div className="text1 py-2">
          <h3>We can give you</h3>
          <h1>Much More Than Others</h1>
        </div>

        <div className="gym-icon d-flex justify-content-around py-4">
          <div className="gym">
            <FitnessCenter />
            <p>200+ gym</p>
          </div>
      
          <div className="gym">
            <Apartment />
            <p>95 cities</p>
          </div>
      
          <div className="gym">
            <SportsKabaddi />
            <p>personal trainers</p>
          </div>
       
          <div className="gym">
            <People />
            <p>community</p>
          </div>
        </div>


      </div>
    </>
  );
};

export default Promotion;
