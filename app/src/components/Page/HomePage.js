import React, { useEffect, useState } from "react";
import "./Page.css";

const Page = () => {
  useEffect(() => {
    console.log("Home page mounted");
  });
  const [isOpen, toggleOpen] = useState(false);
  const [displayText, setText] = useState("About Me");
  const title = "About Me";
  const fulltext =
    "About Me \n----\n----\n----\n----\n----\n----\n----\n----\n----\n----\n----\n----\n----\n----\n----\n----";
  const toggle = () => {
    if (isOpen) {
      toggleOpen(false);
      setText(title);
    } else {
      toggleOpen(true);
      setText(fulltext);
    }
  };
  return (
    <div id="Page-root" style={{ fontSize: "30px" }} onClick={toggle}>
      {displayText}
    </div>
  );
};

export default Page;
