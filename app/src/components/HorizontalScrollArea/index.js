import React, { useEffect, useState } from "react";
import PageContainer from "../PageContainer";

const HorizontalScrollAres = () => {
  const pageList = [];
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
      <PageContainer left={"20%"} />
      <PageContainer left={"85%"} />
      <PageContainer left={"150%"} />
    </div>
  );
};

export default HorizontalScrollAres;
