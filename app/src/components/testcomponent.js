import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { num: state.num };
};

const Dispnum = ({ num }) => {
  return <div>{num}</div>;
};
export default connect(mapStateToProps)(Dispnum);
