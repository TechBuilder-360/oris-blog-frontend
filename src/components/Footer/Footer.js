import React from "react";
import classes from "./Footer.module.css";
import SubscribeForm from "./SubscribeForm";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={`App_Container ${classes.footer_elements}`}>
        <div className={classes.footer_links}>
          <div className={classes.contacts}>
            <h5>Contact Us</h5>
            <a href="#mail">orisblog@gmail.com</a>
            <a href="#phone">0800-000-0000</a>
          </div>
          <div className={classes.about}>
            <h5>About Us</h5>
            <a href="#meet-the-ceo">Meet the CEO</a>
          </div>
          <div className={classes.resources}>
            <h5>Resources</h5>
            <a href="#mail">Oris blog resources</a>
          </div>
          <div className={classes.socials}>
            <h5>Follow Us</h5>
            <a href="#phone">Twitter</a>
            <a href="#phone">instagram</a>
          </div>
        </div>
        <SubscribeForm />
      </div>
    </div>
  );
};

export default Footer;
