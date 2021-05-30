import React from "react";
import classes from "./main-navigation.module.css";
import { Link, NavLink } from "react-router-dom";
import MobileSearch from "../SearchBox/MobileSearch";

const NavBar = (props) => {
  const openNav = () => {
    document.getElementById("sidenav").style.width = "100vw";
    document.getElementById("Menu_btn").style.marginRight = "250px";
    document.getElementById("Menu_btn").style.display = "none";

    document.body.classList.toggle("lock-scroll");
  };

  const closeNav = () => {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("Menu_btn").style.marginRight = "0";
    document.getElementById("Menu_btn").style.display = "block";
    document.body.classList.toggle("lock-scroll");
  };
  return (
    <>
      <nav className={classes.Nav}>
        <div className={`App_Container ${classes.Main_Nav_Container}`}>
          <Link to="/" className={classes.Logo}>
            <p>Oris</p>
          </Link>

          <div className={`${classes.Nav_Sections_Container}`}>
            {/* Mobile Navigation */}
            <div
              className={`${classes.Nav_item} ${classes.Mobile_Nav_Container}`}
            >
              <div className={classes.Mobile_Nav_Items}>
                {/* Search Icon */}
                <MobileSearch />

                {/* Burger Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={openNav}
                  className={`h-6 w-6 ${classes.Menu_btn} ${classes.icon}`}
                  id="Menu_btn"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>

              <div id="sidenav" className={classes.Menu_Items}>
                {/* Close Menu Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={closeNav}
                  className={`${classes.icon} ${classes.Close_btn}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>

                <ul id="menu">
                  <li>
                    <NavLink
                      to={"/about"}
                      className={classes.Mobile_Link}
                      onClick={closeNav}
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/resources"}
                      className={classes.Mobile_Link}
                      onClick={closeNav}
                    >
                      Resources
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/sign-up"}
                      className={classes.Mobile_Link}
                      onClick={closeNav}
                    >
                      Sign Up
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className={classes.Desktop_Nav}>
              <NavLink className={classes.Desktop_Link} to={"/about"}>
                About Us
              </NavLink>
              <NavLink className={classes.Desktop_Link} to={"/resources"}>
                Resources
              </NavLink>
              <NavLink className={classes.Desktop_Link} to={"/sign-up"}>
                Sign Up
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
