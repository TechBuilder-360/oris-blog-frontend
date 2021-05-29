import React from "react";
import classes from "./BlogContainer.module.css";
import { Link } from "react-router-dom";
import post_image from "../../images/logo.png";

const BlogContainer = ({ post, search, data }) => {
  return (
    <div className={classes.post_container}>
      {post.length > 0 ? (
        post.map((blog, index) => (
          <div className={classes.post_card} key={index}>
            <Link
              to={`post/${index}`}
              className={classes.post_link}
              key={index}
            >
              <img
                src={post_image}
                alt="post_image"
                className={classes.post_image}
              />
              <div className={classes.post_details}>
                <h5 className={classes.post_title}>{blog.header}</h5>
                <p className={classes.post_summary}>
                  This is a short exerpt of the blog post. It should be precise
                  and catchy enough.
                </p>
                <div className={classes.post_footer}>
                  <div className={classes.post_auth}>
                    <p>{blog.author}</p>
                    <p>{blog.created_at}</p>
                  </div>
                  <div className={classes.post_time}>
                    <p>{blog.time} read</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <h4 style={{ textAlign: "center" }}> No Posts</h4>
      )}
    </div>
  );
};

export default BlogContainer;
