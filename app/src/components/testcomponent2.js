import React, { Component } from "react";
import { connect } from "react-redux";
import { addOne } from "../Redux/actions";

function mapDispatchToProps(dispatch) {
  return {
    addOne: num => dispatch(addOne(num))
  };
}

const AddButton = props => {
  return <button onClick={props.addOne} />;
};

export default connect(
  null,
  mapDispatchToProps
)(AddButton);
