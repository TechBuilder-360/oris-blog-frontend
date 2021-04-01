import React from "react";
import { useParams } from "react-router-dom";

const Category = () => {
  const { slut } = useParams();
  return <div>{slut}</div>;
};
export default Category;
