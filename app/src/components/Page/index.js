import React from "react";
import "./Page.css";

const Page_expand = () => {
  console.log("click");
};

const Page = () => {
  return (
    <div id="Page-root" onClick={Page_expand}>
      A page
    </div>
  );
};

export default Page;
