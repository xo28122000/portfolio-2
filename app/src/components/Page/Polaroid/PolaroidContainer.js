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
      document.getElementById(props.id + "-details").style.opacity = "0%";
    } else {
      setOpen(true);
      setdetails("Web developer and Organiser for SF Hacks 2020");
      document.getElementById(props.id + "-container").style.backgroundColor =
        "bisque";
      document.getElementById(props.id + "-details").style.opacity = "100%";
    }
  };
  return (
    <div
      id={props.id + "-container"}
      className="PolaroidContainer-root"
      onClick={toggleDetails}
      onMouseEnter={toggleDetails}
      onMouseLeave={toggleDetails}
    >
      <div className="row">
        <div className="col-md-auto">
          <Polaroid
            id={props.id}
            img={props.img}
            txt={props.txt}
            tilt={props.tilt}
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
