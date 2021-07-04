import React from "react";
import BlogContainer from "../BlogContainer/BlogContainer";
import classes from "./Section.module.css";
import { useSelector } from "react-redux";

const Section = ({ post }) => {
  const categories = useSelector((state) => state.blog.categories);

  return (
    <>
      <div className={classes.blogs}>
        <div className={classes.categories_container}>
          <div className={classes.categories}>
            {categories.map((category) => (
              <p key={category}>{category}</p>
            ))}
          </div>
        </div>

        <BlogContainer post={post} />
      </div>
    </>
  );
};

export default Section;
