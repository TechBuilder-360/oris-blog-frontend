import React from "react";
import NavBar from "./components/Navigation/main-navigation";
import Homepage from "./components/Homepage/Homepage";
import CreatePostPage from "./components/CreatePostPage/CreatePostPage";
import { Route, Switch } from "react-router-dom";
import Error404 from "./components/Special Page/Error404";
import SinglePostView from "./components/SinglePostView/SinglePostView";
import Footer from "./components/Footer/Footer";

function App() {
  const routes = (
    <Switch>
      <Route exact path="/create" component={CreatePostPage} />
      <Route exact path="/post/:id" component={SinglePostView} />
      <Route path="/" component={Homepage} />
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
