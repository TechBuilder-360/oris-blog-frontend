import React from "react";
import Icon from "../shared/Icon";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import classes from "./SideDisplay.module.css";
import { connect } from "react-redux";
import { truncateText } from "../shared/utility";

const SideDisplay = (props) => {
  return (
    <div className={classes.sideNav}>
      <h4>Recommendations</h4>

      {props.author.map((dat, index) => (
        <div className={classes.divBody}>
          <div className={classes.icon}>
            <Icon size="3x" icon={faCircle} />
          </div>
          <div className={classes.details}>
            <span>{dat.name} </span>
            <br />
            <p>{truncateText(dat.bio, 40)}</p>
          </div>
          <div className={classes.btnDiv}>
            <button className={classes.button}>Follow</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    post: state.blog.post,
    author: state.blog.author,
  };
};

export default connect(mapStateToProps)(SideDisplay);
