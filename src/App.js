import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./components/Navigation/main-navigation";
import Homepage from "./components/Homepage/Homepage";
import CreatePostPage from "./components/CreatePostPage/CreatePostPage";
import { Route, Switch } from "react-router-dom";
import Error404 from "./components/Special Page/Error404";
import SinglePostView from "./components/SinglePostView/SinglePostView";
import Footer from "./components/Footer/Footer";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/posts`)
      .then((res) => {
        setPost(res.data);
      });
  }, []);

  const routes = (
    <Switch>
      <Route exact path="/create-page" component={CreatePostPage} />
      <Route exact path="/post/:id" component={SinglePostView} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route path="/" render={(props) => <Homepage post={post} {...props} />} />
      <Route path="*" component={Error404} />
    </Switch>
  );
  
  return (
    <>
      <NavBar />
      <div>{routes}</div>
      <Footer />
    </>
  );
}

export default App;
