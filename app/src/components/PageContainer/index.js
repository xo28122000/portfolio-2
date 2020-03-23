import React, { useEffect, useState } from "react";
import "./PageContainer.css";

import Page from "../Page";

import { connect } from "react-redux";
import { setHorzontalNavigate } from "../../Redux/actions";

const PageContainer = props => {
  const [left, setLeft] = useState(props.left);
  useEffect(() => {
    if (props.navigate === 1) {
      props.setHorzontalNavigate(0);
      setLeft(left - 75);
    } else if (props.navigate === -1) {
      setLeft(left + 75);
      props.setHorzontalNavigate(0);
    } else {
    }
  }, [props.navigate, left]);

  return (
    <div id="PageContainer-root" style={{ left: left.toString() + "%" }}>
      <Page />
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
)(PageContainer);
