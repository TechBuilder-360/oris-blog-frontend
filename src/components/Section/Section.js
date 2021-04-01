import React from "react";
import { Col, Row } from "react-bootstrap";
import BlogContainer from "../BlogContainer/BlogContainer";
import SearchBox from "../SearchBox/SearchBox";
import classes from "./Section.module.css";
import { connect } from "react-redux";

const Section = (props) => {
  return (
    <Col md={9}>
      <Row className={classes.main}>
        <SearchBox />

        <BlogContainer post={props.search ? props.data : props.post} />
      </Row>
    </Col>
  );
};

const mapStateToProps = (state) => {
  return {
    search: state.blog.search,
    data: state.blog.data,
    post: state.blog.post,
  };
};
export default connect(mapStateToProps)(Section);
