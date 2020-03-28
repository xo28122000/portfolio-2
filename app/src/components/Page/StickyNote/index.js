import React from "react";
import "./StickyNote.css";

const StickyNote = props => {
  return (
    <div
      className="StickyNote-root"
      style={{ transform: "rotate(" + props.tilt + ")" }}
    >
      <div
        className="StickyNote-top"
        style={{
          backgroundColor:
            "RGB(" +
            (props.R - 20) +
            "," +
            (props.G - 20) +
            "," +
            (props.B - 20) +
            ")"
        }}
      />
      <div
        className="StickyNote-txt"
        style={{
          textAlign: props.alignment,
          backgroundColor:
            "RGB(" + props.R + "," + props.G + "," + props.B + ")"
        }}
      >
        <p style={{ whiteSpace: "pre-line" }}>{props.children}</p>
      </div>
    </div>
  );
};

export default StickyNote;
