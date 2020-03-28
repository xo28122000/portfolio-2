import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward, faBackward } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

import { page_content } from "../../constants";

import { connect } from "react-redux";
import { setHorzontalNavigate } from "../../Redux/actions";

const Footer = props => {
  const [title, setTitle] = useState("About");
  useEffect(() => {
    setTitle(page_content[props.pageNo].title);
  }, [props.pageNo]);
  const nextClick = () => {
    if (props.navigate === 0) {
      props.setHorzontalNavigate(1);
    }
  };
  const prevClick = () => {
    if (props.navigate === 0) {
      props.setHorzontalNavigate(-1);
    }
  };
  return (
    <div id="Footer-root">
      <div id="Footer-container">
        <div className="Footer-elements Footer-icons" onClick={prevClick}>
          <FontAwesomeIcon icon={faBackward} size="3x" />
        </div>
        <div
          className="Footer-elements"
          style={{ flex: "3", fontSize: "6vh", color: "#606060" }}
        >
          {title}
        </div>
        <div className="Footer-elements Footer-icons" onClick={nextClick}>
          <FontAwesomeIcon icon={faForward} size="3x" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { navigate: state.navigate, pageNo: state.pageNo };
};
function mapDispatchToProps(dispatch) {
  return {
    setHorzontalNavigate: payload => dispatch(setHorzontalNavigate(payload))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
