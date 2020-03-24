import React, { useState } from "react";
import "./Page.css";

import Polaroid from "./Polaroid";
import StickyNote from "./StickyNote";

const AboutPage = props => {
  const poloroidImg1 = (
    <img
      src={require("../../assets/images/me1.jpg")}
      className="Polaroid-img"
    />
  );
  const poloroidImg2 = (
    <img
      src={require("../../assets/images/window.jpg")}
      className="Polaroid-img"
    />
  );
  return (
    <div id="Page-root">
      <div className="row">
        <div className="col-sm-2">
          <StickyNote
            txt={
              "Hi there!\n My name is \nJainam Shah\n and this is \nmy portfolio!!"
            }
            tilt="-10deg"
            R={255}
            G={235}
            B={59}
            alignment="center"
          />
        </div>
        <div className="col-sm-6">
          <Polaroid img={poloroidImg1} txt={"That's me!"} tilt="5deg" />
        </div>
        <div className="col-sm-2">
          <StickyNote
            txt={"Get to know me --->\n\n\n"}
            tilt="-4deg"
            R={163}
            G={246}
            B={59}
            alignment="start"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
