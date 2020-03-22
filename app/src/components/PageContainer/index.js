import React, { useEffect, useState } from "react";
import "./PageContainer.css";

const PageContainer = props => {
  const makeCenter = element => {
    element.style.visibility = "visible";
    setLeft("20%");
  };
  const makeLeft = element => {
    element.style.visibility = "visible";
    setLeft("-40%");
  };
  const makeRight = element => {
    element.style.visibility = "visible";
    setLeft("85%");
  };

  useEffect(() => {
    if (props.isVisible) {
      const pg_ele = document.getElementById("PageContainer-root");
      if (props.pos == -1) {
        makeLeft(pg_ele);
      } else if (props.pos == 0) {
        makeCenter(pg_ele);
      } else if (props.pos == 1) {
        makeRight(pg_ele);
      } else {
        console.log("error");
      }
    }
  });

  const [posLeft, setLeft] = useState("20%");
  return (
    <div id="PageContainer-root" style={{ left: posLeft }}>
      {/* blah
      <br />
      <br /> blah
      <br />
      <br /> blah
      <br />
      <br /> blah
      <br />
      <br /> blah
      <br />
      <br /> blah
      <br />
      <br /> blah
      <br />
      <br /> blah
      <br />
      <br /> blah
      <br />
      <br /> blah
      <br />
      <br /> blah
      <br />
      <br /> blah
      <br />
      <br /> blah
      <br />
      <br /> */}
    </div>
  );
};

export default PageContainer;
