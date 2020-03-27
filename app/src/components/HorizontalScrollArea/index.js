import React, { useEffect } from "react";
import PageContainer from "../PageContainer";
import AboutPage from "../Page/AboutPages/AboutPage";
import ExperiencePage from "../Page/ExperiencePages/ExperiencePage";
import ProjectPage from "../Page/ProjectPages/ProjectPage";

import { page_index } from "../../constants";
const HorizontalScrollAres = props => {
  const pagePosition = page_index;

  return (
    <div
      style={{
        backgroundColor: "#121212",
        height: "90vh",
        width: "100vw",
        bottom: "10vh",
        position: "fixed",
        justifyContent: "center"
      }}
    >
      <PageContainer left={pagePosition[0]} page={<AboutPage />} />
      <PageContainer left={pagePosition[1]} page={<ExperiencePage />} />
      <PageContainer left={pagePosition[2]} page={<ProjectPage />} />
    </div>
  );
};

export default HorizontalScrollAres;
