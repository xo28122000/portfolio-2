import React from "react";
import "../Page.css";

import Polaroid from "../Polaroid";
import StickyNote from "../StickyNote";

const AboutPage2 = props => {
  const poloroidImg1 = (
    <img
      src={require("../../../assets/images/SFSU.png")}
      className="Polaroid-img"
    />
  );

  return (
    <div id="Page-root">
      <div className="row">
        <div className="col-sm-3">
          <StickyNote tilt="-10deg" R={255} G={235} B={59} alignment="center">
            Im currently studying
            <br /> Computer Science <br />
            at SFSU
          </StickyNote>
        </div>
        <div className="col-sm-3">
          <StickyNote tilt="-10deg" R={255} G={235} B={59} alignment="center">
            Going to graduate in <br />
            2021!
            <br />
            Thats next year!!
          </StickyNote>
        </div>
        <div className="col-sm-6">
          <Polaroid img={poloroidImg1} txt={"Go Gators!"} tilt="5deg" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage2;
