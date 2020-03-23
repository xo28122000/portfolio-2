import React, { useEffect, useState } from "react";
import "./PageContainer.css";

import Page from "../Page";
const PageContainer = props => {
  useEffect(() => {
    if (props.left == "20%") {
      setScroll("scroll");
    } else {
      setScroll("none");
    }
  });

  // const [posLeft, setLeft] = useState();
  const [scroll, setScroll] = useState("none");
  return (
    <div id="PageContainer-root" style={{ left: props.left }}>
      <Page scroll={scroll} />
    </div>
  );
};

export default PageContainer;
