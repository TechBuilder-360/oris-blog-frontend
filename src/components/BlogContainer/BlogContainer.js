import React from "react";
import classes from "./BlogContainer.module.css";
import { Link } from "react-router-dom";
import post_image from "../../images/logo.png";
import { Spinner } from "react-bootstrap";

const BlogContainer = ({ post }) => {
  const { data } = post;

  const truncate = (str) => {
    return str.length > 100 ? str.substring(0, 60) + "..." : str;
  };
  return (
    <div className={classes.post_container}>
      {data ? (
        data.length > 0 ? (
          data.map((blog) => (
            <div className={classes.post_card} key={blog._id}>
              <Link to={`post/${blog.slug}`} className={classes.post_link}>
                <img
                  src={post_image}
                  alt="post_image"
                  className={classes.post_image}
                />
                <div className={classes.post_details}>
                  <h5 className={classes.post_title}>{blog.title}</h5>
                  <p className={classes.post_summary}>
                    {truncate(blog.summary)}
                  </p>
                  <div className={classes.post_footer}>
                    <div className={classes.post_auth}>
                      <p>{blog.authorid}</p>
                      <p>{blog.datecreated}</p>
                    </div>
                    <div className={classes.post_time}>
                      <p>{blog.readtime}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <h4 style={{ textAlign: "center" }}> No Posts</h4>
        )
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default BlogContainer;
