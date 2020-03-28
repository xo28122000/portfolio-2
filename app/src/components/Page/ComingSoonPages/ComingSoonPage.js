import React from "react";
import "../Page.css";

import PolaroidContainer from "../Polaroid/PolaroidContainer";

const AboutPage = props => {
  const poloroidGif1 = (
    <img
      src={require("../../../assets/gif/UnderConstruction.gif")}
      className="Polaroid-img"
    />
  );

  return (
    <div className="Page-root">
      <PolaroidContainer
        id="uconstruction"
        img={poloroidGif1}
        txt={"Under construction!"}
        tilt="5deg"
        details={
          <div>
            I wanted to release this site ASAP and theres alot of stuff that I
            have overlooked.
            <br />
            I'll be working on it and release more updates soon!
          </div>
        }
        containerColor="#8f8f8f"
      />
    </div>
  );
};

export default AboutPage;
