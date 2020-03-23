import React, { useState } from "react";
import "./Page.css";

import Polaroid from "./Polaroid";
import StickyNote from "./StickyNote";

const Page = props => {
  const poloroidImg1 = (
    <img
      src={require("../../assets/images/bike.jpg")}
      className="Polaroid-img"
    />
  );
  const poloroidImg2 = (
    <img
      src={require("../../assets/images/window.jpg")}
      className="Polaroid-img"
    />
  );
  return (
    <div id="Page-root">
      <Polaroid
        img={poloroidImg1}
        txt={
          "here is a long long text in the text are lets see what happens well it fit"
        }
        tilt="10deg"
      />
      <Polaroid img={poloroidImg2} txt={"here "} tilt="-10deg" />

      <StickyNote txt={"here "} tilt="0deg" />
      <StickyNote txt={"here "} tilt="0deg" />
    </div>
  );
};

export default Page;
