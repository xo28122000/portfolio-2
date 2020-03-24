import React, { useEffect } from "react";
import PageContainer from "../PageContainer";
import AboutPage from "../Page/AboutPage";
import Page from "../Page/index";

const HorizontalScrollAres = props => {
  const pagePosition = [15, 95, 175];

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
      <PageContainer left={pagePosition[0]} page={<AboutPage />} />
      <PageContainer left={pagePosition[1]} page={<Page />} />
      <PageContainer left={pagePosition[2]} page={<Page />} />
    </div>
  );
};

export default HorizontalScrollAres;
