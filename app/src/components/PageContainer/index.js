import React, { useEffect, useState } from "react";
import "./PageContainer.css";
import { connect } from "react-redux";
import { setHorzontalNavigate, setPageNo } from "../../Redux/actions";
import { last_page_no, page_jump } from "../../constants";

const PageContainer = props => {
  const [left, setLeft] = useState(props.left);
  const [pageNo, setPageNo] = useState(0);
  var tempPageNo;
  useEffect(() => {
    if (props.navigate === 1) {
      if (pageNo < last_page_no) {
        tempPageNo = pageNo;
        setLeft(left - page_jump);
        setPageNo(pageNo + 1);
        props.setGlobalPageNo(tempPageNo + 1);
      }
      props.setHorzontalNavigate(0);
    } else if (props.navigate === -1) {
      if (pageNo > 0) {
        tempPageNo = pageNo;
        setLeft(left + page_jump);
        setPageNo(pageNo - 1);
        props.setGlobalPageNo(tempPageNo - 1);
      }
      props.setHorzontalNavigate(0);
    } else {
    }
  }, [props.navigate, left]);

  return (
    <div className="PageContainer-root" style={{ left: left.toString() + "%" }}>
      {props.page}
    </div>
  );
};

const mapStateToProps = state => {
  return { navigate: state.navigate, pageNo: state.pageNo };
};
function mapDispatchToProps(dispatch) {
  return {
    setHorzontalNavigate: payload => dispatch(setHorzontalNavigate(payload)),
    setGlobalPageNo: payload => dispatch(setPageNo(payload))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageContainer);
