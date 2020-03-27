import React from "react";
import "../Page.css";

import PolaroidContainer from "../Polaroid/PolaroidContainer";

const ProjectPage = props => {
  const poloroidImg1 = (
    <img
      src={require("../../../assets/images/HealthDetech.png")}
      className="Polaroid-img"
    />
  );
  const poloroidImg2 = (
    <img
      src={require("../../../assets/images/RecoveryT.jpg")}
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
      <PolaroidContainer
        id="HealthDetech"
        img={poloroidImg1}
        txt={"HealthDe.tech"}
        tilt="5deg"
        details={
          <div>
            Link:
            <span style={{ textDecoration: "underline" }}>
              <a href="https://github.com/xo28122000/HealthDetect">
                github.com/xo28122000/HealthDetect
              </a>
            </span>
            <br />
            The aim of the project is to serve the medical purposes in third
            world countries where medical infrastructure is not very strong.
            <br />
            This app will help them determine what problem they might be facing
            either by using a photo or by answering series of questions, direct
            them to the required resources and send reports to a government body
            with the list of diseases detected and its metadata to improve the
            health care of that region accordingly.
            <br />
            My contributions:
            <br />◦ Developed a React.js front-end for users to sign up/in and
            upload a picture of the diseased body part.
            <br />◦ Trained CNN models to detect diseases using Tensorflow API
            and Google Cloud Platform.
            <br />◦ Deployed a restful flask server to use the trained models to
            predict the disease in pictures requested by the user.
          </div>
        }
        containerColor="#ec756c"
      />
      <PolaroidContainer
        id="RecoveryCoach"
        img={poloroidImg2}
        txt={"Recovery Coach"}
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
        containerColor="#ec756c"
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
        containerColor="#ec756c"
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
          containerColor="#ec756c"
        />
      </div>
    </div>
  );
};

export default ProjectPage;
