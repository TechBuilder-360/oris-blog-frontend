
import { faBook, faImage, faPencilAlt, faSave, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import {Col,Row} from 'react-bootstrap'
import classes from './BlogContainer.module.css'


  const BlogContainer=(props) =>{
 
 
  return (
    <Col md={12}>
      {props.post.map((blog,index)=>
      
      <Row className={classes.main}>

<Col>
   <div className={classes.header}>
   <div><FontAwesomeIcon className={classes.icon} size="2x" icon={faImage}/>
      <span>{blog.author}</span></div>
     </div> 
    
  <div className={classes.left}><div><h4>{blog.header}</h4></div></div>
  
  <div className={classes.timer}>
    
   <div><i>created on {blog.created_at}</i> </div>
    
    <div><FontAwesomeIcon className={classes.icon} size="1x" icon={faStopwatch}/> 
    <span>{blog.time}</span></div></div>
      

   
   
    <div className={classes.left}>
<div><FontAwesomeIcon className={classes.icon} size="1x" icon={faBook}/>
    <span>Follow</span>
 </div>
 <div><FontAwesomeIcon className={classes.icon} size="1x" icon={faSave}/>
  
  <span>Save</span></div>
  
    <div><FontAwesomeIcon className={classes.icon} size="1x" icon={faPencilAlt}/>
  
  <span>Comment</span></div>
  
  

    </div>
  

</Col>
  
       <Col md={4} sm={4} xs={4} className={classes.right}>
       </Col>
     </Row>
      
      
      )}
    </Col>
  );
}


export default BlogContainer;


