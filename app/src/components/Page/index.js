import React from "react";
import "./Page.css";

const Page_expand = () => {
  console.log("click");
  document.getElementById("Page-container");
};

const Page = () => {
  return (
    <div id="Page-root" onClick={Page_expand}>
      A page
    </div>
  );
};

export default Page;
