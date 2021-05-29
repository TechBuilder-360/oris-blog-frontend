import React from "react";
import classes from "./Homepage.module.css";
import Hero from "../Hero_section/Hero";
import Section from "../Section/Section";

const Homepage = (props) => {
  return (
    <>
      <div className={classes.home_container}>
        <Hero />
        <div className="App_Container">
          <Section />
        </div>
      </div>
    </>
  );
};

export default Homepage;
