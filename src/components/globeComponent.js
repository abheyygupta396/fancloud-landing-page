// src/LandingPage.js
import React from "react";
import "../assets/styles/GlobePage.css";
import Globe from "../assets/images/globe.png";
import Subtract from "../assets/images/Subtract.png";
import Dummy from "../assets/images/dummy.png";
import Section1 from "../assets/images/section1.png";
import Section2 from "../assets/images/section2.png";
import Section3 from "../assets/images/section3.png";
import Image from "./common/image";

const GlobeComponent = () => {
  return (
    <div className="globe-style">
      <header className="globe-header">
        <h1>
          FanCloud CDN network revolutionizes video infrastructure with
          community-driven Innovation
        </h1>
        <p>
          FanCloud pioneers a new era of connectivity with its decentralised
          content delivery network (dCDN), leveraging a global network of
          community-powered nodes. By harnessing a decentralised architecture,
          dCDN drastically reduces data transfer and compute costs while
          enhancing load time. Join FanCloud's dCDN network and experience the
          future of seamless, secure and community-driven consumption.
        </p>
      </header>
      <div className="globe-section">
        <Image id={"globe"} src={Globe} className={"globe"} alt={"globe"} />
        <Image id={"arc"} src={Subtract} className={"arc"} alt={"arc"} />
        <div className="avatars">
          <Image
            id="avatar1"
            src={Dummy}
            className="avatar"
            alt="Avatar"
            style={{ top: "20%", left: "22%" }}
          />
          <Image
            id="avatar2"
            src={Dummy}
            className="avatar"
            alt="Avatar"
            style={{ top: "50%", left: "14%" }}
          />
          <Image
            id="avatar3"
            src={Dummy}
            className="avatar"
            alt="Avatar"
            style={{ top: "7%", right: "30%" }}
          />
          <Image
            id="avatar4"
            src={Dummy}
            className="avatar"
            alt="Avatar"
            style={{ bottom: "20%", right: "13%" }}
          />
          <Image
            id="avatar5"
            src={Dummy}
            className="avatar"
            alt="Avatar"
            style={{ left: "40%", bottom: "93%" }}
          />
          <Image
            id="avatar6"
            src={Dummy}
            className="avatar"
            alt="Avatar"
            style={{ top: "40%", right: "15%" }}
          />
        </div>
      </div>
      <footer className="globe-footer">
        <Image id="sec1" src={Section1} alt="section" />
        <Image id="sec2" src={Section2} alt="section" />
        <Image id="sec3" src={Section3} alt="section" />
      </footer>
    </div>
  );
};

export default GlobeComponent;
