import React from "react";
import { Col, Container, Row ,Button} from "react-bootstrap";
import classes from "./Homepage.module.css";
import Post from '../Post/Post'
import {Switch,Route,Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Category from "../Category/Category";


const Homepage = (props) => {
  
  
  return (
    <Container>   
     
     <Row className={classes.Main}>
            <Col md={3} className={classes.subMain}>
            <div className={classes.sidebar}>
            <h5>Topics</h5>
           
            <div>
              <ul>
              {props.category.map((cat,index)=>
            <Link to={`cat/${index}`} key={index} className={classes.link}>
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
              <Switch>
                <Route exact path='/'component={Post} />
                <Route path='cat/:index' component={Category} />
              </Switch>
          
            </Col>
      </Row>
     
     
          
        
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    post: state.blog.post,
    category:state.blog.categories
  };
};

export default connect(mapStateToProps)(Homepage);
