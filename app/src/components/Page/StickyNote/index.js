import React from "react";
import "./StickyNote.css";
const StickyNote = props => {
  return (
    <div
      className="StickyNote-root"
      style={{ transform: "rotate(" + props.tilt + ")" }}
    >
      <div className="StickyNote-top" />
      <div className="StickyNote-txt">{props.txt}</div>
    </div>
  );
};

export default StickyNote;
