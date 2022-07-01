import React from "react";
import "./Hero.css";
import Header from "../Header/Header";

const Hero = () => {
  return (
    <div className="hero">
      <div className="lift-h">
        <Header />

        <div className="the-best-ad">
          
            <div className="the"></div>
            <span>the best fitness club in the towns</span>
            
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke">Shape</span>
            <span>Your</span>
          </div>
          <div>
            <span>IDEAL</span>
            <span>BODY</span>
          </div>
        </div>


      </div>
      <div className="right-h">right</div>
    </div>
  );
};

export default Hero;
