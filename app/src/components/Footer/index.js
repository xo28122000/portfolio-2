import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward, faBackward } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="Footer-root">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap"
          //   justifyContent: "center"
        }}
      >
        <div
          style={{
            flex: 1,
            flexGrow: 1,
            textAlign: "center",
            height: "10vh",
            paddingTop: "1vh",
            paddingBottom: "1vh"
          }}
        >
          <FontAwesomeIcon
            icon={faBackward}
            size="4x"
            style={{ height: "8vh" }}
          />
        </div>

        <div
          style={{
            flex: 1,
            flexGrow: 1,
            textAlign: "center",
            height: "10vh",
            paddingTop: "1vh",
            paddingBottom: "1vh"
          }}
        >
          <FontAwesomeIcon
            icon={faForward}
            size="4x"
            style={{ height: "8vh" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
