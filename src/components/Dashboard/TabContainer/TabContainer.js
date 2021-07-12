import React, { useEffect, useState } from "react";
import { Row, Col, Nav } from "react-bootstrap";
import Draft from "./TabContent/Draft";
import Published from "./TabContent/Published";
import axios from "axios";
import SpinnerComponent from "../../Spinner/spinner";

const TabContainer = () => {
  const [draft, setDraft] = useState();
  const [published, setPublished] = useState();
  const [eventKey, setEventKey] = useState("draft");
  const [active, setActive] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/posts?status=published`)
      .then((res) => {
        if (res.data.data === null) {
          setPublished([]);
        } else {
          setPublished(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/posts?status=draft`)
      .then((res) => {
        if (res.data.data === null) {
          setDraft([]);
        } else {
          setDraft(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onClickDraft = () => {
    setEventKey("draft");
    setActive(true);
  };

  const onClickPublish = () => {
    setEventKey("published");
    setActive(false);
  };

  return (
    <Row>
      <Col md={12}>
        <Nav>
          <Nav.Item onFocus={onClickDraft}>
            <Nav.Link className={active ? "active" : ""}>
              Draft {draft ? `(${draft.length})` : "(0)"}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item onClick={onClickPublish}>
            <Nav.Link className={!active ? "active" : ""}>
              Published {published ? `(${published.length})` : "(0)"}
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col md={12}>
        {(draft ? (published ? true : false) : false) ? (
          eventKey === "draft" ? (
            <Draft posts={draft} />
          ) : (
            <Published posts={published} />
          )
        ) : (
          <SpinnerComponent />
        )}
      </Col>
    </Row>
  );
};

export default TabContainer;
