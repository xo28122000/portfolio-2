import React, { useState, useEffect } from "react";
import "./Polaroid.css";

const Polaroid = props => {
  useEffect(() => {});

  var back = <div></div>;

  const [toggle, setToggle] = useState(false);
  const [display, setDisplay] = useState(null);
  const toggleDisplay = () => {
    if (toggle) {
      setToggle(false);
      setDisplay(null);
    } else {
      setToggle(true);
      setDisplay(back);
    }
  };
  return (
    <div id={props.id} className="Polaroid-root" onClick={props.toggleDetails}>
      <div
        className="Polaroid-container"
        style={{ transform: "rotate(" + props.tilt + ")" }}
      >
        {props.img}
        <div className="Polaroid-txt">{props.txt}</div>
        {display}
      </div>
    </div>
  );
};

export default Polaroid;
