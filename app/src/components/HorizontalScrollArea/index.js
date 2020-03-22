import React from "react";
import PageContainer from "../PageContainer";

const HorizontalScrollAres = () => {
  return (
    <div
      style={{
        backgroundColor: "#d4f5d4",
        height: "80vh",
        width: "100vw",
        top: "10vh",
        bottom: "10vh",
        position: "fixed",
        justifyContent: "center"
      }}
    >
      <PageContainer pos={-1} isVisible={true} />
      <PageContainer pos={0} isVisible={true} />
    </div>
  );
};

export default HorizontalScrollAres;
