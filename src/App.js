import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeNavBar from "./components/Navigation/main-navigation";
import Wrapper from "./container/Container";
import Homepage from "./components/Homepage/Homepage";
import CreatePostPage from "./components/CreatePostPage/CreatePostPage";
import { Route, Switch } from "react-router-dom";
import Error404 from "./components/Special Page/Error404";
import SinglePostView from "./components/SinglePostView/SinglePostView";

function App() {
  const routes = (
    <Switch style={{ paddingLeft: "0" }}>
      <Route exact path="/create" component={CreatePostPage} />
      <Route exact path="/post/:id" component={SinglePostView} />
      <Route path="/" component={Homepage} />
      <Route path="*" component={Error404} />
    </Switch>
  );

  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <HomeNavBar />
        </Col>
        <Col md={12}>
          <Wrapper>{routes}</Wrapper>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
