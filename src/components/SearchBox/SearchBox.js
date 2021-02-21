import React from 'react'
import {Form,Row,Col} from 'react-bootstrap'
import classes from './SearchBox.module.css'

const SearchBox=()=>{

return(
<div className={classes.btn}>
<Row>
      <Col md={9}></Col><Col md={3}>
      <Form>
      <Form.Control type='text' placeholder="search" className={ classes.div}/>
</Form>

      </Col>
</Row>


</div>

);
};

export default SearchBox