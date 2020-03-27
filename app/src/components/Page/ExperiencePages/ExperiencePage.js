import React from "react";
import "../Page.css";

import Polaroid from "../Polaroid";
import PolaroidContainer from "../Polaroid/PolaroidContainer";
import StickyNote from "../StickyNote";

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
    <div id="Page-root">
      {/* <div className="col-sm-3">
          <StickyNote tilt="-10deg" R={255} G={235} B={59} alignment="center">
            Web developer and Organiser for SF Hacks 2020
          </StickyNote>
          <StickyNote tilt="-10deg" R={255} G={235} B={59} alignment="left">
            - Build sfhacks2020.com with React.js
            <br />- Reached out to sponsors
            <br />- Sketched the structure for competition
          </StickyNote>
        </div> */}
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
        containerColor="red"
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
        containerColor="red"
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
              <a href="https://ueap.sfsu.edu/tutoring">
                ueap.sfsu.edu/ tutoring
              </a>
            </span>
          </div>
        }
        containerColor="red"
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
          containerColor="red"
        />
      </div>
      {/* <div className="col-sm-3">
          <StickyNote tilt="0deg" R={255} G={235} B={59} alignment="left">
            My first summer internship <br />
            in 2019
            <br />
            SpeedLegal is a startup working on streamlining
            <br /> legal due diligence and
            <br /> document review
          </StickyNote>
        </div>
        <div className="col-sm-3">
          <StickyNote tilt="-10deg" R={255} G={235} B={59} alignment="left">
            I worked on developing and designing a web app using React.js to
            render the labeled information from the ML model.
          </StickyNote>
        </div> */}
      {/* <StickyNote tilt="5deg" R={255} G={235} B={59} alignment="left">
            I also worked on automating parsing, extraction and scaling of
            features from PDF using python
          </StickyNote> */}
      {/* <StickyNote tilt="-10deg" R={255} G={235} B={59} alignment="left">
          I tutor at <br />
          TASC-SFSU <br />
          Book an appointment today
          <br />
          <span style={{ textDecoration: "underline" }}>
            <a href="https://ueap.sfsu.edu/tutoring">
              ueap.sfsu.edu/
              <br />
              tutoring
            </a>
          </span>
        </StickyNote>
        <StickyNote tilt="-10deg" R={255} G={235} B={59} alignment="center">
          Supplemental course instructor for Data Structures(Java).
          <br />
          Need help with Data Structures hmu!
        </StickyNote> */}
    </div>
  );
};

export default ExperiencePage;
