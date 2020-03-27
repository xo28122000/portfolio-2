import React, { useEffect } from "react";
import PageContainer from "../PageContainer";
// import AboutPage1 from "../Page/AboutPages/AboutPage1";
// import AboutPage2 from "../Page/AboutPages/AboutPage2";
import ExperiencePage from "../Page/ExperiencePages/ExperiencePage";
// import ExperiencePage2 from "../Page/ExperiencePages/ExperiencePage2";
import Page from "../Page/index";

const HorizontalScrollAres = props => {
  const pagePosition = [15, 95, 175];

  return (
    <div
      style={{
        backgroundColor: "#121212",
        height: "90vh",
        width: "100vw",
        // top: "10vh",
        bottom: "10vh",
        position: "fixed",
        justifyContent: "center"
      }}
    >
      <PageContainer left={pagePosition[0]} page={<ExperiencePage />} />
      {/* <PageContainer left={pagePosition[1]} page={<AboutPage2 />} />
      <PageContainer left={pagePosition[2]} page={<Page />} /> */}
    </div>
  );
};

export default HorizontalScrollAres;
