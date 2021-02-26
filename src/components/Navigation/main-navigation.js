import React from "react";
import classes from "./main-navigation.module.css";
import logo from "../../images/logo.png";
import {connect} from 'react-redux'
import Select from 'react-select'
import { Link, NavLink } from "react-router-dom";
import Container from "../../container/Container";
import { Button,Form,Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const HomeNavBar = (props) => {
  return (
    <div>
      <nav className={classes.Nav}>
        <Link to="/">
          <img src={logo} className={classes.Logo} alt="Oris" />
        </Link>
        <div className={classes.Nav_item}>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/create"}>Create Blog</NavLink>
          <Dropdown id="basic">
  <Dropdown.Toggle variant="secondary" >
    Navigation
  </Dropdown.Toggle>

  <Dropdown.Menu>
  {props.category.map((cat,index)=>
    <Dropdown.Item><NavLink to={`/${index}`}>{cat}</NavLink>
    <Dropdown.Divider /></Dropdown.Item>
  )}
  </Dropdown.Menu>
</Dropdown>
<NavLink to={"#"}><FontAwesomeIcon icon={faLock}/> Log Out</NavLink>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    
    category:state.blog.categories
  };
};

export default connect(mapStateToProps)(HomeNavBar);
