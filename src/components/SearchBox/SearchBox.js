import React from 'react'
import {Form,Container,Row,Col} from 'react-bootstrap'
import classes from './SearchBox.module.css'

const SearchBox=()=>{

return(
<Container className={classes.btn}>
<Row>
      <Col md={9}></Col><Col md={3}>
      <Form>
      <Form.Control type='text' placeholder="search" className={ classes.div}/>
</Form>

      </Col>
</Row>


</Container>

);
};

export default SearchBox