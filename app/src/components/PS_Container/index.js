import React from "react";
import "./PS_Container.css";

import Page from "../Page";
import HomePage from "../Page/HomePage";

const PS_Container = () => {
  return (
    <div id="PS_Container-root">
      <div id="Sidebar-container-root">sidebar</div>
      <div id="Page-container-root">
        <HomePage />
        <Page name="Experiences" />
        <Page name="Projects" />
      </div>
    </div>
  );
};

export default PS_Container;
