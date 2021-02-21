import React from "react";
import Circle from "../Circle/Circle";
import classes from "./Post.module.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

const Post = (props) => {
  return (
    <div className={classes.sidebar}>
      <h5 style={{ marginLeft: "30px" }}>Recent Posts</h5>

      {props.post.map((post, index) => (
        <Link to={`/${index}`} key={index} className={classes.link}>
          <div className={classes.post_body}>
            <div style={{ float: "left" }}>
              <Circle />
            </div>
            <div className={classes.post_sidebar}>
              <span style={{ fontWeight: "bold" }}>{post.header}</span>
              <div className={classes.span}>
                <span style={{ float: "right" }}>{post.created_at}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}

      <div className={classes.button_component}>
        <Button variant="secondary">Previous</Button>
        <Button variant="secondary">Next</Button>
      </div>
      <div></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    post: state.blog.post,
  };
};

export default connect(mapStateToProps)(Post);
