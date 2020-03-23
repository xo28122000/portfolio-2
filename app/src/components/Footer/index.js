import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward, faBackward } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

import { connect } from "react-redux";
import { setHorzontalNavigate } from "../../Redux/actions";

const Footer = props => {
  const nextClick = () => {
    if (props.navigate === 0) props.setHorzontalNavigate(1);
  };
  const prevClick = () => {
    if (props.navigate === 0) props.setHorzontalNavigate(-1);
  };
  return (
    <div id="Footer-root">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap"
          //   justifyContent: "center"
        }}
      >
        <div
          style={{
            flex: 1,
            flexGrow: 1,
            textAlign: "center",
            height: "10vh",
            paddingTop: "1vh",
            paddingBottom: "1vh"
          }}
        >
          <div>
            <FontAwesomeIcon
              icon={faBackward}
              size="4x"
              onClick={prevClick}
              style={{ height: "8vh" }}
            />
          </div>
        </div>

        <div
          style={{
            flex: 1,
            flexGrow: 1,
            textAlign: "center",
            height: "10vh",
            paddingTop: "1vh",
            paddingBottom: "1vh"
          }}
        >
          <FontAwesomeIcon
            icon={faForward}
            size="4x"
            onClick={nextClick}
            style={{ height: "8vh" }}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { navigate: state.navigate };
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
