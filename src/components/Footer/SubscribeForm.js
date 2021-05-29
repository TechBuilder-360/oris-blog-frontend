import classes from "./SubscribeForm.module.css";
import React from "react";

const SubscribeForm = (props) => {
  return (
    <div className={classes.subscribe_form}>
      <input type="email" />
      <input type="button" value="Subscribe" />
    </div>
  );
};

export default SubscribeForm;
