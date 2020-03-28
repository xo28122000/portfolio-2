import React, { useState, useEffect } from "react";

import Polaroid from "./index";
import "./Polaroid.css";

const PolaroidContainer = props => {
  useEffect(() => {});

  const [details, setdetails] = useState(null);
  const [open, setOpen] = useState(false);

  const toggleDetails = () => {
    if (open) {
      setOpen(false);
      setdetails(null);
      document.getElementById(props.id + "-container").style.backgroundColor =
        "transparent";
      document.getElementById(props.id + "-details").style.opacity = "0";
    } else {
      setOpen(true);
      setdetails(props.details);
      document.getElementById(props.id + "-container").style.backgroundColor =
        props.containerColor;
      document.getElementById(props.id + "-details").style.opacity = "1";
      console.log(document.getElementById(props.id + "-details").style.opacity);
    }
  };
  return (
    <div id={props.id + "-container"} className="PolaroidContainer-root">
      <div className="row" style={{ padding: 0, margin: 0 }}>
        <div className="col-md-auto">
          <Polaroid
            id={props.id}
            img={props.img}
            txt={props.txt}
            tilt={props.tilt}
            toggleDetails={toggleDetails}
          />
        </div>
        <div
          id={props.id + "-details"}
          className="col-md-auto PolaroidContainer-details"
        >
          {details}
        </div>
      </div>
    </div>
  );
};

export default PolaroidContainer;
