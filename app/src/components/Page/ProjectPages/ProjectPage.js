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
  const poloroidGif1 = (
    <img
      src={require("../../../assets/gif/RideAid.gif")}
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
            Link:
            <span style={{ textDecoration: "underline" }}>
              <a href="https://github.com/joshuaaguilar20/MIT-HealthHacks">
                github.com/joshuaaguilar20/MIT-HealthHacks
              </a>
            </span>
            <br />◦ Developed a web app to increase the efficiency of physical
            therapy centers by giving the power of supervising to AI.
            <br />◦ Traced the movements of joints using poseNet and compared to
            the correct exercise pattern uploaded by the PT.
            <br />◦ Won 3rd place in self care in chronic diseases track.
          </div>
        }
        containerColor="#ec756c"
      />
      <PolaroidContainer
        id="RideAid"
        img={poloroidGif1}
        txt={"RideAid"}
        tilt="-5deg"
        details={
          <div>
            Link:
            <span style={{ textDecoration: "underline" }}>
              <a href="https://github.com/helenamerk/hackmobility">
                github.com/helenamerk/hackmobility
              </a>
            </span>
            <br />
            HackMobility 2019 Carpooling made simpler, safer and efficient
            <br />◦ Developed a React Native app for user to start/join a pool
            and integrated the SmartCar’s API to verify and unlock the car.
            <br />◦ Developed a data processing back-end to clean and serve the
            data to front-end after fetching it from a PostgreSQL database.
            <br />◦ Won the Shell Grand Prize and an award for the best use of
            Smartcar API.
          </div>
        }
        containerColor="#ec756c"
      />
    </div>
  );
};

export default ProjectPage;
