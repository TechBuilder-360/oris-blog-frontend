import React from "react";
import Wrapper from "../../container/Container";
import classes from "./Layout.module.css";
import Homepage from "../../components/Homepage/Homepage";
import CreatePostPage from "../../components/CreatePostPage/CreatePostPage";
import SearchBox from "../../components/SearchBox/SearchBox";
import { Row, Col, Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import Error404 from "../../components/Special Page/Error404";

const Layout = () => {
  const routes = (
    <Switch style={{ paddingLeft: "0" }}>
      <Route exact path="/" component={Homepage} />
      <Route path="/create" component={CreatePostPage} />
      <Route path="/:index" component={null} />
      <Route path="*" component={Error404} />
    </Switch>
  );

  return (
    <Container>
      <Col md={12}>
        <div className="pull-right">
          <SearchBox />
        </div>
      </Col>
      <Col className={classes.section}>
        <Wrapper>{routes}</Wrapper>
      </Col>
    </Container>
  );
};

export default Layout;
