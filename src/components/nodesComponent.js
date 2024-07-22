// src/LandingPage.js
import React from "react";
import "../styles/LandingPage.css";
import Frame1 from "../assets/images/frame1.png";
import Frame2 from "../assets/images/frame2.png";
import Image from "./common/image";
import { randomImage } from "../helpers/constants";

const NodesComponent = () => {
  return (
    <div className="landing-page">
      <div className="overlap-image">
        <header className="header">
          <h1 className="blend-text">EMPOWERING THE DIGITAL ERA:</h1>
          <h1 className="blend-text">DECENTRALIZING ENTERTAINMENT</h1>
          <p>
            Join the world's first DePIN: Revolutionizing Content Streaming with
            faster, Safer and Cheaper Access
          </p>
          <button className="coming-soon-btn">Coming Soon</button>
        </header>
        <div className="images-section">
          <Image id={"img1"} src={randomImage} className={"image"} alt={"image"}/>
          <Image id={"img2"} src={randomImage} className={"image"} alt={"image"}/>
          <Image id={"img3"} src={randomImage} className={"image"} alt={"image"}/>
          <Image id={"img4"} src={randomImage} className={"image"} alt={"image"}/>
          <Image id={"img6"} src={randomImage} className={"image"} alt={"image"}/>
        </div>
        <footer className="footer">
          <Image id="frame1" src={Frame1} alt={"image"}/>
          <Image id="frame2" src={Frame2} alt={"image"} />
        </footer>
      </div>
    </div>
  );
};

export default NodesComponent;
