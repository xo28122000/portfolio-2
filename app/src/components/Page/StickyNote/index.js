import React, { useEffect } from "react";
import "./StickyNote.css";

const StickyNote = props => {
  useEffect(() => {
    if (window.innerWidth < 1050) {
      // for mobile phones with a smaller width
      const SiickyNoteTop = document.getElementsByClassName("StickyNote-top");
      const SiickyNoteTxt = document.getElementsByClassName("StickyNote-txt");
      const setWidth = (window.innerWidth * 0.3).toString() + "px";
      for (let i = 0; i < SiickyNoteTop.length; i++) {
        console.log(setWidth);
        SiickyNoteTop[i].style.width = setWidth;
        SiickyNoteTxt[i].style.width = setWidth;
      }
    }
  });
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
        {props.txt}
      </div>
    </div>
  );
};

export default StickyNote;
