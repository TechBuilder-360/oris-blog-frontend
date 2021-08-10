import React from "react";
// import { Link } from "react-router-dom";
import classes from "./Hero.module.css";
import SearchBox from "../SearchBox/SearchBox";
import AuthenticationButton from "../Auth0/authentication-button";

const Hero = () => {
  return (
    <header>

      <div className={classes.hero_container}>
          
        <div className={`${classes.App_Container} ${classes.outer}`}>
        <SearchBox />
          <div className={classes.details}>
            <h2>The blog title goes here</h2>
            <p>The subtitle text which describe the blog goes here.</p>

            {/* <Link onClick={() => loginWithRedirect()} className={classes.login_button}>Log in</Link> */}
            <AuthenticationButton/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
