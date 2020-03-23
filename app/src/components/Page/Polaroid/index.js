import React from "react";
import "./Polaroid.css";

const Polaroid = props => {
  return (
    <div className="Polaroid-root">
      <div
        className="Polaroid-container"
        style={{ transform: "rotate(" + props.tilt + ")" }}
      >
        {props.img}
        <div className="Polaroid-txt">{props.txt}</div>
      </div>
    </div>
  );
};

export default Polaroid;
