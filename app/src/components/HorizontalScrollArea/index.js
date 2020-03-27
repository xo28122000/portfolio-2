import React, { useEffect } from "react";
import PageContainer from "../PageContainer";
import AboutPage from "../Page/AboutPages/AboutPage";
import ExperiencePage from "../Page/ExperiencePages/ExperiencePage";
import ProjectPage from "../Page/ProjectPages/ProjectPage";

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
      <PageContainer left={pagePosition[0]} page={<ProjectPage />} />
      {/* <PageContainer left={pagePosition[1]} page={<AboutPage2 />} />
      <PageContainer left={pagePosition[2]} page={<Page />} /> */}
    </div>
  );
};

export default HorizontalScrollAres;
