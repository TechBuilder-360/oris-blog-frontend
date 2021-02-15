import React from "react";
import { Col, Container, Row ,Button} from "react-bootstrap";
import classes from "./Homepage.module.css";
import Post from '../Post/Post'


const Homepage = () => {
  
  const Category=["Art","Music","Politics","History","Biology","Science"]

  return (
    <Container>   
     <Col md={12} className={classes.Main}>
     <Row>
            <Col md={3} className={classes.subMain}>
            <div className={classes.sidebar}>
            <h5>Topics</h5>
           
            <div>
              <ul>
              {Category.map((cat,index)=>
            <li>
              {cat}
            </li>
            
            
               ) }
              </ul>
  
            </div>
            </div>
            </Col>
            <Col md={9} className={classes.Main_Content}>
            <div className={classes.sidebar}>
            <h5 style={{marginLeft:'30px'}}>Recent Posts</h5>
            
            <Post/>
            <div className={classes.button_component}>
              <Button variant='secondary'>Previous</Button>
              <Button variant='secondary'>Next</Button>
            </div>
            <div>
            
            </div>
            </div>
            </Col>
      </Row>
     </Col>
     
          
        
    </Container>
  );
};

export default Homepage;
