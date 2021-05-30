import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const SinglePostView = () => {
  const { id } = useParams();

  return <div className="App_Container">{id}</div>;
};
export default SinglePostView;
