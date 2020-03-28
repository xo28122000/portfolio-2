import React from "react";
import "./Page.css";

import Polaroid from "./Polaroid";
import StickyNote from "./StickyNote";

const Page = () => {
  const poloroidImg1 = (
    <img
      alt="bike"
      src={require("../../assets/images/bike.jpg")}
      className="Polaroid-img"
    />
  );
  const poloroidImg2 = (
    <img
      alt="window"
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

      <StickyNote
        txt={"here"}
        tilt="5deg"
        R={255}
        G={235}
        B={59}
        alignment="center"
      />
      <StickyNote
        txt={"here"}
        tilt="-10deg"
        R={163}
        G={246}
        B={59}
        alignment="start"
      />
    </div>
  );
};

export default Page;
