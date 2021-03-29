import React,{useState} from 'react'
import { Col, Container, Row ,Button,InputGroup,Form, Card} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import classes from "./SideDisplay.module.css";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { truncateText } from '../shared/utility'

const SideDisplay =(props)=>{

  const data=[
    {
    name:'folayan solla',
    bio:'i am a full stack web developer in the departmemnt od fhtnhfjg'
    
    },
    {
      name:'ade solla',
      bio:'i am a full stack web developer in the departmemnt od fhtnhfjg'
      
      },
    
      {
        name:'michael solla',
        bio:'i am a full stack web developer in the departmemnt od fhtnhfjg'
        
        }
    
    ]

  return (

<div className={classes.sideNav}>
  <h4>Recommendations</h4>

{data.map((dat,index)=>

<div className={classes.divBody}>
  <div className={classes.icon}>
    <FontAwesomeIcon size="3x" icon={faCircle }/>
    </div>
  <div className={classes.details}>
   <span>{dat.name} </span>
  <br/>
   <p>{truncateText(dat.bio,40)}</p>
  </div>
  <div className={classes.btnDiv}>
    <button className={classes.button}>Follow</button>
</div>

</div>





)}




</div>
  )
}

const mapStateToProps = (state) => {
  return {
    post: state.blog.post,
    author:state.blog.author
   
  };
};

export default connect(mapStateToProps)(SideDisplay);