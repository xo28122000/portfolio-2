import React from "react";
import PageContainer from "../PageContainer";

const HorizontalScrollAres = props => {
  const pagePosition = [20, 95, 170];
  return (
    <div
      style={{
        backgroundColor: "#d4f5d4",
        height: "90vh",
        width: "100vw",
        // top: "10vh",
        bottom: "10vh",
        position: "fixed",
        justifyContent: "center"
      }}
    >
      <PageContainer left={pagePosition[0]} />
      <PageContainer left={pagePosition[1]} />
      <PageContainer left={pagePosition[2]} />
    </div>
  );
};

export default HorizontalScrollAres;
