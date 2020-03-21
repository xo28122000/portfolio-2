import React from "react";
import "./Page.css";

window.scroll({
  top: 2500,
  left: 0,
  behavior: "smooth"
});
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
