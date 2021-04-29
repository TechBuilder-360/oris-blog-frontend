import {
  faBook,
  faImage,
  faPencilAlt,
  faSave,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "../shared/Icon"
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import classes from "./BlogContainer.module.css";
import { Link } from "react-router-dom";

const BlogContainer = (props) => {
  return (
    <Col md={12}>
      {props.post.length > 0 ? (
        props.post.map((blog, index) => (
          <Row className={classes.main} key={index}>
            <Col md={8} sm={8} xs={8}>
              <div className={classes.header}>
                <div>
                  <Icon className={classes.icon} size="1x" icon={faImage} />
                  <span>{blog.author}</span>
                </div>
              </div>
              <Link to={`post/${index}`} className={classes.link}>
                <div className={classes.left}>
                  <div>
                    <span>{blog.header}</span>
                  </div>
                </div>

                <div className={classes.timer}>
                  <div>
                    <i>created on {blog.created_at}</i>{" "}
                  </div>

                  <div>
                    <Icon
                      className={classes.icon}
                      size="1x"
                      icon={faStopwatch}
                    />
                    <span>{blog.time}</span>
                  </div>
                </div>
              </Link>

              <div className={classes.left}>
                <div >
                  <Button className={classes.btn} variant="primary" size="sm">
                  <Icon className={classes.icon} size="1x" icon={faBook} />
                  <span>Follow</span>
                  </Button>
                  
                </div>
                <div >
                  <Button className={classes.btn} variant="primary" size="sm">
                  <Icon className={classes.icon} size="1x" icon={faSave} />
                  <span>Bookmark</span>
                </div>
                <div>
                  <Button className={classes.btn} variant="default" size="sm">
                  <Icon className={classes.icon} size="1x" icon={faPencilAlt} />
                  <span>Comment</span>
                  </Button>
                  
                </div>
              </div>
            </Col>
         
            <Col md={4} sm={4} xs={4} className={classes.right}>   <Link to={`post/${index}`} className={classes.link}></Link></Col>
          </Row>
        ))
      ) : (
        <h4 style={{ textAlign: "center" }}> No Result</h4>
      )}
    </Col>
  );
};

export default BlogContainer;
