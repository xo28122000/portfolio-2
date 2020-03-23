import React, { useState } from "react";
import "./Page.css";

const Page = props => {
  const [top, setTop] = useState("20px");
  return (
    <div id="Page-root">
      <div id="movethis" style={{ top: top }}>
        tomove
      </div>
      <button onClick={() => setTop("1200px")}>go</button>
      <button onClick={() => setTop("20px")}>come back</button>
    </div>
  );
};

export default Page;
