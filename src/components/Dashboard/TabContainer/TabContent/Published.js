import React from "react";
import { Card } from "react-bootstrap";
import classes from "./TabContent.module.css";
import dateFormat from "dateformat";

const Published = ({ posts }) => {
  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <Card border="light" key={index}>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>
                <em className={classes.dateText}>
                  {dateFormat(
                    post.datecreated,
                    "dddd, mmmm dS, yyyy, h:MM:ss TT"
                  )}
                </em>
              </Card.Text>
            </Card.Body>
          </Card>
        ))
      ) : (
        <em className={classes.empty}>empty!!</em>
      )}
    </div>
  );
};
export default Published;
