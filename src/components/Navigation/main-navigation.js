import React from "react";
import classes from "./main-navigation.module.css";
import logo from "../../images/logo.png";
import { Link, NavLink } from "react-router-dom";
import Container from "../../container/Container";
import { Button } from "react-bootstrap";



const HomeNavBar = () => {
  return (
    <Container>
      <nav className={classes.Nav}>
       <Link to='/'>
         <img src={logo} className={classes.Logo} alt="Oris"/></Link>
        <div className={classes.Nav_item}>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/create"}>
          Create Blog
            </NavLink>
        
        </div>
      </nav>


    </Container>
  );
};

export default HomeNavBar;
