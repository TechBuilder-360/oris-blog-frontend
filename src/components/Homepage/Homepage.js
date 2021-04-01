import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./Homepage.module.css";
import { connect } from "react-redux";
import SideDisplay from "../SideDisplay/SideDisplay";
import TitlePage from "../TitlePage/TitlePage";
import Section from "../Section/Section";

const Homepage = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col md={7}>
          <Row>
            <Col md={1}></Col> <Section />
            <Col md={2}></Col>
          </Row>
        </Col>

        <Col md={5} className={classes.side}>
          <SideDisplay />
          <TitlePage />
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    post: state.blog.post,
    category: state.blog.categories,
  };
};

export default connect(mapStateToProps)(Homepage);
