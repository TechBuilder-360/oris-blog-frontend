
import { faBook, faImage, faPencilAlt, faSave, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import Icon  from "../shared/Icon";
import React from 'react';
import {Col,Row} from 'react-bootstrap'
import classes from './BlogContainer.module.css'
import { Link } from 'react-router-dom'


  const BlogContainer=(props) =>{
 
 
  return (
    <Col md={12}>
      {
      
      props.post.length > 0 ?
      props.post.map((blog,index)=>
      
      <Row className={classes.main} key={index}>

<Col>
   <div className={classes.header}>
   <div><Icon className={classes.icon} size="1x" icon={faImage}/>
      <span>{blog.author}</span></div>
     </div> 
    <Link to={`post/${index}`}  className={classes.link}>
    <div className={classes.left}>
      <div>
        <span>{blog.header}</span>
        </div>
        </div>
  
  <div className={classes.timer}>
    
   <div><i>created on {blog.created_at}</i> </div>
  
    
  
    <div>
      <Icon className={classes.icon} size="1x" icon={faStopwatch}/> 
    <span>{blog.time}</span>
    </div>
    </div>
    </Link>

   
   
    <div className={classes.left}>
<div><Icon className={classes.icon} size="1x" icon={faBook}/>
    <span>Follow</span>
 </div>
 <div><Icon className={classes.icon} size="1x" icon={faSave}/>
  <span>Save</span></div>
    <div><Icon className={classes.icon} size="1x" icon={faPencilAlt}/>
  <span>Comment</span></div>
    </div>
  

</Col>
  
       <Col md={4} sm={4} xs={4} className={classes.right}>
       </Col>
     </Row>
      
      
      ):

      <h4 style={{textAlign:'center'}}> No Result</h4>
      
      
      
      
      }
    </Col>
  );
}


export default BlogContainer;


