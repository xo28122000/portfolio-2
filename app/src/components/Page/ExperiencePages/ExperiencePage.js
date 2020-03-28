import React from "react";
import "../Page.css";

import PolaroidContainer from "../Polaroid/PolaroidContainer";

const ExperiencePage = props => {
  const poloroidImg1 = (
    <img
      src={require("../../../assets/images/SFHacksTeam.png")}
      className="Polaroid-img"
    />
  );
  const poloroidImg2 = (
    <img
      src={require("../../../assets/images/TASC.jpg")}
      className="Polaroid-img"
    />
  );
  const poloroidImg3 = (
    <img
      src={require("../../../assets/images/SI.jpg")}
      className="Polaroid-img"
    />
  );
  const poloroidImg4 = (
    <img
      src={require("../../../assets/images/SpeedLegal.png")}
      className="Polaroid-img"
    />
  );

  return (
    <div className="Page-root">
      <PolaroidContainer
        id="SFHACKS"
        img={poloroidImg1}
        txt={"SF Hacks 2020"}
        tilt="5deg"
        details={
          <div>
            Web developer and Organiser for SF Hacks 2020
            <br /> - Build sfhacks2020.com with React.js
            <br />- Reached out to sponsors
            <br />- Sketched the structure for competition
          </div>
        }
        containerColor="#8f8f8f"
      />
      <PolaroidContainer
        id="SpeedLegal"
        img={poloroidImg4}
        txt={"1st internship"}
        tilt="5deg"
        details={
          <div>
            My first summer internship in 2019
            <br />
            SpeedLegal is a startup working on streamlining
            <br /> legal due diligence and document review
            <br />I worked on developing and designing a web app using React.js
            to render the labeled information from the ML model.
            <br /> I also worked on automating parsing, extraction and scaling
            of features from PDF using python
          </div>
        }
        containerColor="#8f8f8f"
      />
      <PolaroidContainer
        id="TASC"
        img={poloroidImg2}
        txt={"Tutor"}
        tilt="-5deg"
        details={
          <div>
            I tutor at TASC-SFSU <br />
            Book an appointment today
            <br />
            <span style={{ textDecoration: "underline" }}>
              <a href="https://ueap.sfsu.edu/tutoring" target="_blank">
                ueap.sfsu.edu/ tutoring
              </a>
            </span>
          </div>
        }
        containerColor="#8f8f8f"
      />
      <div className="container-fluid">
        <PolaroidContainer
          id="SI"
          img={poloroidImg3}
          txt={"Lecturer"}
          tilt="5deg"
          details={
            <div>
              Supplemental course instructor for Data Structures(Java).
              <br />
              Need help with Data Structures hmu!
            </div>
          }
          containerColor="#8f8f8f"
        />
      </div>
    </div>
  );
};

export default ExperiencePage;
