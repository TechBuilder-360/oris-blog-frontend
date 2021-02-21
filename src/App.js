import React from "react";
import Layout from "./container/Layout/Layout";
import { Container, Row, Col } from "react-bootstrap";
import HomeNavBar from "./components/Navigation/main-navigation";
import classes from "./App.module.css";

function App() {
  return (
    <Container fluid className={classes.Wrapper}>
      <Row>
        <Col md={12}>
          <HomeNavBar />
        </Col>
        <Layout />
      </Row>
    </Container>
  );
}

export default App;
