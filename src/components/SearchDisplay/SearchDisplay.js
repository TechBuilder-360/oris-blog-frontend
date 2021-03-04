import React from 'react'
import { Col, Container, Row ,Button} from "react-bootstrap";
import classes from "./SearchDisplay.module.css";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Post from '../Post/Post'

const SearchDisplay=(props)=>{

return(
 <Container>   
     
     <Row className={classes.Main}>
            <Col md={3} className={classes.subMain}>
            <div className={classes.sidebar}>
            <h5>Topics</h5>
           
            <div>
              <ul>
              {props.category.map((cat,index)=>
            <Link to={`/${index}`} key={index} className={classes.link}>
             <li key={index}>
              {cat}
            </li>
            
            </Link>
           
            
               ) }
              </ul>
  
            </div>
            </div>
            </Col>
            <Col md={9} className={classes.Main_Content}>
             <Post post={props.results}/>
            </Col>
      </Row>
     
     
          
        
    </Container>


)
}

const mapStateToProps = (state) => {
  return {
    post: state.blog.post,
    category:state.blog.categories
  };
};

export default connect(mapStateToProps)(SearchDisplay);