import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import classes from "./SinglePostView.module.css";
import post_image from "../../images/logo.png";

const SinglePostView = (props) => {
  const [post, setPost] = useState(null);
  const [morePost, setMorePost] = useState([]);

  useEffect(() => {
    axios
      .get("https://demo-orisblog-backend.herokuapp.com/api/v1/blog/posts/")
      .then((res) => {
        let id = props.match.params.id;
        const allPost = res.data.data;
        const singlePost = allPost.filter((post) => post.slug === id);
        setPost(singlePost[0]);

        const selectedPost = allPost.slice(0, 2);
        setMorePost(selectedPost);
        console.log(selectedPost);
      });
  }, []);

  const postView = post ? (
    <div className={classes.post_container}>
      <section className={classes.article_details}>
        <img src={post_image} alt="blog_image" />
        <div>
          <h4>{post.title}</h4>
          <h6>{post.dateupdated}</h6>
        </div>
        <p>{post.article}</p>
      </section>
      <section className={classes.post_options}>
        <aside className={classes.more_post}>
          <h5>More articles</h5>
          {morePost.map((mp) => (
            <div key={mp._id} className={classes.more_post_link_container}>
              <Link to="">
                <h6>{mp.title}</h6>
                <p>{mp.authorid}</p>
              </Link>
            </div>
          ))}
        </aside>
        <aside className={classes.author_details}>
          <div className={classes.author_avatar}>
            <img src={post_image} alt="author" />
            <h5>{post.authorid}</h5>
          </div>
          <div className={classes.about_author}>
            <h6>About the author</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
              cupiditate voluptatibus autem molestias dicta repellat obcaecati,
              mollitia laudantium? maxime.
            </p>
          </div>
          <div className={classes.author_actions}>
            <span>Follow</span>
            <span>Save</span>
            <span>Comments</span>
          </div>
        </aside>
      </section>
    </div>
  ) : (
    <div style={{ textAlign: "center", marginTop: 50 }}>Loading...</div>
  );

  return <div className="App_Container">{postView}</div>;
};
export default SinglePostView;
