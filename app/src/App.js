import React, { useEffect } from "react";
import "./App.css";

import HorizontalScrollArea from "./components/HorizontalScrollArea";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    if (window.innerWidth < 1050) {
      // for mobile phones with a smaller width
      const SiickyNoteTop = document.getElementsByClassName("StickyNote-top");
      const SiickyNoteTxt = document.getElementsByClassName("StickyNote-txt");
      const setWidth = (window.innerWidth * 0.5).toString() + "px";
      for (let i = 0; i < SiickyNoteTop.length; i++) {
        SiickyNoteTop[i].style.width = setWidth;
        SiickyNoteTxt[i].style.width = setWidth;
        SiickyNoteTxt[i].style.fontSize = "5vw";
      }
      const PolaroidTxt = document.getElementsByClassName("Polaroid-txt");
      for (let i = 0; i < PolaroidTxt.length; i++) {
        PolaroidTxt[i].style.fontSize = "5vw";
      }
      if (window.innerWidth < 1050) {
      }
    }
  });
  return (
    <div className="App-Root">
      {/* <Header /> */}
      <HorizontalScrollArea />
      <Footer />
    </div>
  );
}

export default App;
