import React from "react";
import { Container } from "react-bootstrap";
import { Result, Button } from "antd";

const Error404 = () => {
  return (
    <Container>
      <Result
        style={{ display: "block", marginLeft: "50px" }}
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => window.history.back()}>
            Back
          </Button>
        }
      />
    </Container>
  );
};

export default Error404;
