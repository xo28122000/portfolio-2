import React from "react";
import "./PS_Container.css";

import Page from "../Page";

const PS_Container = () => {
  return (
    <div id="PS_Container-root">
      <div id="Sidebar-container">sidebar</div>
      <div id="Page-container">
        <Page />
        <Page />
        <Page />
      </div>
    </div>
  );
};

export default PS_Container;
