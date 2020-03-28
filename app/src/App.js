import React, { useEffect } from "react";
import "./App.css";

import HorizontalScrollArea from "./components/HorizontalScrollArea";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    if (window.innerWidth < 950) {
      //   // for mobile phones with a smaller width
      //   const SiickyNoteTop = document.getElementsByClassName("StickyNote-top");
      //   const SiickyNoteTxt = document.getElementsByClassName("StickyNote-txt");
      //   const setWidth = (window.innerWidth * 0.5).toString() + "px";
      //   for (let i = 0; i < SiickyNoteTop.length; i++) {
      //     SiickyNoteTop[i].style.width = setWidth;
      //     SiickyNoteTxt[i].style.width = setWidth;
      //     SiickyNoteTxt[i].style.fontSize = "5vw";
      //   }
      // const PolaroidTxt = document.getElementsByClassName("Polaroid-txt");
      // for (let i = 0; i < PolaroidTxt.length; i++) {
      //   PolaroidTxt[i].style.fontSize = "4vw";
      // }
      //   if (window.innerWidth < 1050) {
      //   }
    }
  });
  const appMouseUp = () => {
    document.getElementById("App-Root").style.cursor =
      'url("./assets/images/dot.png"), auto';
  };
  const appMouseDown = () => {
    document.getElementById("App-Root").style.cursor =
      'url("./assets/images/dot.png"), auto';
  };
  return (
    <div
      id="App-Root"
      style={customCursor}
      onMouseDown={appMouseDown}
      onMouseUp={appMouseUp}
    >
      {/* <Header /> */}
      <HorizontalScrollArea />
      <Footer />
    </div>
  );
}

export default App;
