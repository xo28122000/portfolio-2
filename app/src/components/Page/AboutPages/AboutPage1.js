import React from "react";
import "../Page.css";

import Polaroid from "../Polaroid";
import StickyNote from "../StickyNote";

const AboutPage1 = props => {
  const poloroidImg1 = (
    <img
      src={require("../../../assets/images/me1.jpg")}
      className="Polaroid-img"
    />
  );

  return (
    <div id="Page-root">
      <div className="row">
        <div className="col-sm-2">
          <StickyNote tilt="-10deg" R={255} G={235} B={59} alignment="center">
            Hi there!
            <br /> My name is <br />
            Jainam Shah
            <br /> and this is <br />
            my portfolio!!
          </StickyNote>
        </div>
        <div className="col-sm-6">
          <Polaroid img={poloroidImg1} txt={"That's me!"} tilt="5deg" />
        </div>
        <div className="col-sm-2">
          <StickyNote tilt="-4deg" R={163} G={246} B={59} alignment="start">
            Get to know me --->
            <br />
            <br />
            <br />
          </StickyNote>
        </div>
      </div>
    </div>
  );
};

export default AboutPage1;
