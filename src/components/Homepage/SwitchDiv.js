import React from "react";
import { Switch, Route } from "react-router-dom";
import Category from "../Category/Category";
import Post from "../Post/Post";
import { useSelector } from "react-redux";

const SwitchDiv = () => {
  const post = useSelector(state => state.blog.post)
  return (
    <div>
      <Switch>
        <Route exact path="/:slut" component={Category} />
        <Route path="/">
          <Post post={post} />
        </Route>
      </Switch>
    </div>
  );
};


export default SwitchDiv;
