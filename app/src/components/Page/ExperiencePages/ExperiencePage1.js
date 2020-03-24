import React from "react";
import "../Page.css";

import Polaroid from "../Polaroid";
import StickyNote from "../StickyNote";

const ExperiencePage1 = props => {
  const poloroidImg1 = (
    <img
      src={require("../../../assets/images/SFHacksTeam.png")}
      className="Polaroid-img"
    />
  );

  return (
    <div id="Page-root">
      <div className="row">
        <div className="col-sm-3">
          <StickyNote tilt="-10deg" R={255} G={235} B={59} alignment="center">
            Web developer and Organiser for SF Hacks 2020
          </StickyNote>
          <StickyNote tilt="-10deg" R={255} G={235} B={59} alignment="left">
            - Build sfhacks2020.com with React.js
            <br />- Reached out to sponsors
            <br />- Sketched the structure for competition
          </StickyNote>
        </div>

        <div className="col-sm-9">
          <Polaroid img={poloroidImg1} txt={"SF Hacks 2020"} tilt="5deg" />
        </div>
      </div>
      {/* <div className="row"></div> */}
    </div>
  );
};

export default ExperiencePage1;
