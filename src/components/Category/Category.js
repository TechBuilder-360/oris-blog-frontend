import React from "react";
import { useParams } from "react-router-dom";

const Category = () => {
  const { slut } = useParams();
  console.log(slut)
  return <div>{slut}</div>;
};
export default Category;
