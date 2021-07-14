import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import classes from "./Dashboard.module.css";
import { NavLink } from "react-router-dom";
import TabContainer from "./TabContainer/TabContainer";

const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <div style={{ margin: "30px 0px" }}>
            <span className={classes.header}>Your articles</span>
            <NavLink to={"/create-page"}>
              <Button className={classes.btn}>Write Article</Button>
            </NavLink>
          </div>
        </Col>
        <Col md={12}>
          <TabContainer />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
