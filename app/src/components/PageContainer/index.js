import React, { useEffect } from "react";

const PageContainer = props => {
  useEffect(() => {
    console.log("pageContainerLoaded");
  });
  return (
    <div
      style={{
        position: "fixed",
        top: "10vh",
        bottom: "10vh",
        left: "20%",
        backgroundColor: "#d4e4f5",
        height: "auto",
        width: "60%",
        overflowY: "scroll",
        fontSize: "40px"
      }}
    >
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
