import React, { useEffect } from "react";
import PageContainer from "../PageContainer";
import AboutPage from "../Page/AboutPages/AboutPage";
import ExperiencePage from "../Page/ExperiencePages/ExperiencePage";
import ProjectPage from "../Page/ProjectPages/ProjectPage";
import ComingSoonPage from "../Page/ComingSoonPages/ComingSoonPage";

import { page_index } from "../../constants";

import "./HorizontalScrollArea.css";

const HorizontalScrollArea = props => {
  const pagePosition = page_index;

  return (
    <div className="HorizontalScrollArea-root">
      <PageContainer left={pagePosition[0]} page={<AboutPage />} />
      <PageContainer left={pagePosition[1]} page={<ExperiencePage />} />
      <PageContainer left={pagePosition[2]} page={<ProjectPage />} />
      <PageContainer left={pagePosition[3]} page={<ComingSoonPage />} />
    </div>
  );
};

export default HorizontalScrollArea;
