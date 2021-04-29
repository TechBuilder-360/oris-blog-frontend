import React from "react";
import Icon from "../shared/Icon";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import classes from "./SideDisplay.module.css";
import { truncateText } from "../shared/utility";
import { useSelector, shallowEqual } from "react-redux";

const SideDisplay = () => {
  const author = useSelector((state) => state.blog.author, shallowEqual);

  return (
    <div className={classes.sideNav}>
      <h4>Recommendations</h4>
      {author.map((dat) => (
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

export default SideDisplay;
