import React from "react";
import "./Page.css";

const Page = props => {
  return (
    <div id="Page-root" style={{ overflowY: props.scroll }}>
      A page
      <br /> <br /> <br /> A page
      <br /> <br /> <br /> A page
      <br /> <br /> <br /> A page
      <br /> <br /> <br /> A page
      <br /> <br /> <br /> A page
      <br /> <br /> <br /> A page
      <br /> <br /> <br />
    </div>
  );
};

export default Page;
