import React from "react";
import "./Polaroid.css";

const Polaroid = props => {
  return (
    <div id={props.id} className="Polaroid-root" onClick={props.toggleDetails}>
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
