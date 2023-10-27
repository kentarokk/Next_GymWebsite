import React from "react";
import "./Hero.css";
import Heart from "../../assets/heart.png";
import Hero_Image from "../../assets/hero_image.png";
import Hero_Image_Back from "../../assets/hero_image_back.png";
import Calories from "../../assets/calories.png";
import Header from "../Header/Header";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <div></div>
          <span>the bast fitnes club in the town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your </span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build yout ideal body and
              live up your life to fullest.
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
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>

        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <div className="heart-rate">
          <img src={Heart.src} alt="" />
          <span>Heart Rate</span>
          <span>116 BPM</span>
        </div>

        <img src={Hero_Image.src} alt="" className="hero-image" />
        <img src={Hero_Image_Back.src} alt="" className="hero-image-back" />

        <div className="calories">
          <img src={Calories.src} alt="" />
          <div>
            <span>CaloriesBurned</span>
            <span>220kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
