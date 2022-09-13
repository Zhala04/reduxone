import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import BlogItem from "./BlogItem";

const BlogList = (props) => {
  return (
 
    <div className="container mt-3 ">
      <div className="sidebar d-flex flex-column align-items-center">
        <img src="https://flow.qodeinteractive.com/flow2/wp-content/uploads/2015/12/logoleft.png" width='130px' height='180px' style={{marginBottom:'50px'}} alt="" />
       <Link to="/home" className="sidelinks">HOME</Link>
       <Link to="/add" className="sidelinks">Add Blog</Link>
       <a href="" className="sidelinks">Features</a>
       <a href="" className="sidelinks">Category</a>
       <a href="" className="sidelinks">Post Types</a>
       <a href="" className="sidelinks">Contact me</a>
      </div>
      <div className="row">
        {props.pvalue.map((a, i) => {
          return <BlogItem key={i} {...a} />;
        })}
      </div>
    </div>
 
  );
};
const mapStateToProps = (state) => {
  return {
    pvalue: state.actionreducer,
  };
};
export default connect(mapStateToProps)(BlogList);