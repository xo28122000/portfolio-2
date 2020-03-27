import React from "react";
import "../Page.css";

import PolaroidContainer from "../Polaroid/PolaroidContainer";

const AboutPage = props => {
  const poloroidImg1 = (
    <img
      src={require("../../../assets/images/me1.jpg")}
      className="Polaroid-img"
    />
  );
  const poloroidImg2 = (
    <img
      src={require("../../../assets/images/SFSU.png")}
      className="Polaroid-img"
    />
  );

  return (
    <div id="Page-root">
      {/* Hi there!
            <br /> My name is <br />
            Jainam Shah
            <br /> and this is <br />
            my portfolio!! */}
      <PolaroidContainer
        id="me"
        img={poloroidImg1}
        txt={"That's me!"}
        tilt="5deg"
        details={
          <div>
            Web developer and Organiser for SF Hacks 2020
            <br /> - Build sfhacks2020.com with React.js
            <br />- Reached out to sponsors
            <br />- Sketched the structure for competition
          </div>
        }
        containerColor="#ec756c"
      />
      <PolaroidContainer
        id="Gators"
        img={poloroidImg2}
        txt={"Go Gators!"}
        tilt="5deg"
        details={
          <div>
            Im currently studying
            <br /> Computer Science <br />
            at SFSU
            <br />
            Going to graduate in <br />
            2021!
            <br />
            Thats next year!!
          </div>
        }
        containerColor="#ec756c"
      />
      \
    </div>
  );
};

export default AboutPage;
