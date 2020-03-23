import React, { useEffect, useState } from "react";
import PageContainer from "../PageContainer";

import { connect } from "react-redux";
import { setHorzontalNavigate } from "../../Redux/actions";

const HorizontalScrollAres = props => {
  const [pagePosition, setPagePosition] = useState([20, 95, 170]);
  useEffect(() => {
    if (props.navigate === 1) {
      if (pagePosition[2] != 20) {
        for (var i = 0; i < pagePosition.length; i++) {
          pagePosition[i] -= 75;
        }
        setPagePosition(pagePosition);
      }
      props.setHorzontalNavigate(0);
    } else if (props.navigate === -1) {
      if (pagePosition[0] != 20) {
        for (i = 0; i < pagePosition.length; i++) {
          pagePosition[i] += 75;
        }
        setPagePosition(pagePosition);
      }
      props.setHorzontalNavigate(0);
    }

    console.log();
  });

  return (
    <div
      style={{
        backgroundColor: "#d4f5d4",
        height: "80vh",
        width: "100vw",
        top: "10vh",
        bottom: "10vh",
        position: "fixed",
        justifyContent: "center"
      }}
    >
      <PageContainer left={pagePosition[0].toString() + "%"} />
      <PageContainer left={pagePosition[1].toString() + "%"} />
      <PageContainer left={pagePosition[2].toString() + "%"} />
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
)(HorizontalScrollAres);
