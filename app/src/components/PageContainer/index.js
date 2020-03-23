import React from "react";
import "./PageContainer.css";

import Page from "../Page";
const PageContainer = props => {
  return (
    <div id="PageContainer-root" style={{ left: props.left }}>
      <Page />
    </div>
  );
};

export default PageContainer;
