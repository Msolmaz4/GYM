import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import {motion} from 'framer-motion'

const Hero = () => {
  const trans ={type :'spring' , duration :3}


  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
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
            <span>IDEAL BODY</span>
          
            <div>
              <span id="nopro">
              No prior knowledge of react is required to follow this project. The project is surely suitable for beginners.
              </span>
            </div>
          </div>


          <div className="figures">
            <div>
              <span>+140</span>
              <span>expert coachs</span>
            </div>
            <div>
            <span>+978</span>
              <span>members joins</span>
            </div>
            <div>
            <span>+50</span>
              <span>Program</span>
            </div>

          </div>
        </div>

        <div className="hero-buttons">
          <button className='btn'>Get Start</button>
          <button className='btn'>Learn</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">Join </button>
        <div className="heart-rate">
          <img src="heart.jpg" alt="" />
          <span>Heart Rate</span><span>116bm</span>
        </div>

        <img src='hero.png' alt="" className="hero-image" />
        <div className="calori">
          <img src="cart.png" alt="" />
          <div>
          <span>Calories Burned</span>
          <span>220 kcal</span>
          </div>
         
        </div>
      </div>

    </div>
  );
};

export default Hero;
