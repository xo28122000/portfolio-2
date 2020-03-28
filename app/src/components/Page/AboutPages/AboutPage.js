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
  const poloroidImg3 = (
    <img
      src={require("../../../assets/images/Linkedin.png")}
      className="Polaroid-img"
    />
  );
  const poloroidImg4 = (
    <img
      src={require("../../../assets/images/Github.png")}
      className="Polaroid-img"
    />
  );
  const poloroidImg5 = (
    <img
      src={require("../../../assets/images/Instagram.png")}
      className="Polaroid-img"
    />
  );

  return (
    <div className="Page-root">
      <PolaroidContainer
        id="me"
        img={poloroidImg1}
        txt={"That's me!"}
        tilt="0deg"
        details={
          <div>
            I am a Web/mobile developer
            <br />I love React.js
            <br />I love React Native
            <br />I love Python
            <br />I love Express.js
            <br />.<br />.<br />.
            <br />I love Table Tennis
            <br />I love Tennis
            <br />
            <br />
            Welcome to my Portfolio!!
          </div>
        }
        containerColor="#8f8f8f"
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
        containerColor="#8f8f8f"
      />
      <div className="row">
        <div className="col-sm-4">
          <PolaroidContainer
            id="LinkedIn"
            img={poloroidImg3}
            txt={"LinkedIn"}
            tilt="-5deg"
            details={
              <div>
                <span style={{ textDecoration: "underline" }}>
                  <a href="https://linkedin.com/in/jainam-s" target="_blank">
                    jainam-s
                  </a>
                </span>
              </div>
            }
            containerColor="#8f8f8f"
          />
        </div>
        <div className="col-sm-4">
          <PolaroidContainer
            id="Github"
            img={poloroidImg4}
            txt={"Github"}
            tilt="-5deg"
            details={
              <div>
                <span style={{ textDecoration: "underline" }}>
                  <a href="https://github.com/xo28122000" target="_blank">xo28122000</a>
                </span>
              </div>
            }
            containerColor="#8f8f8f"
          />
        </div>
        <div className="col-sm-4">
          <PolaroidContainer
            id="Instagram"
            img={poloroidImg5}
            txt={"Instagram"}
            tilt="-5deg"
            details={
              <div>
                <span style={{ textDecoration: "underline" }}>
                  <a href="https://instagram.com/jxxshah" target="_blank">jxxshah</a>
                </span>
              </div>
            }
            containerColor="#8f8f8f"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
