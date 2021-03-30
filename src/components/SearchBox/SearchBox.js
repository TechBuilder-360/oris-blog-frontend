import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React,{useState} from 'react';
import { Form,Col, InputGroup } from 'react-bootstrap';
import classes from './SearchBox.module.css'
import {connect} from 'react-redux'
import { useDispatch} from "react-redux";
import { on_search,search_result } from '../../store/actions/blogAction';
import Icon from '../shared/Icon'

const SearchBox=(props)=> {
  const dispatch=useDispatch()
  const [value,setValue]=useState('')

  function triggerSearch(e){
    setValue(e)
    if(e.length>0){

dispatch(on_search(true))
  var data =props.post.filter(post=>post.header.toLowerCase().includes(value.toLowerCase()))
  dispatch(search_result(data))
    }else{
dispatch(on_search(false))

    }
    
  }
  
  
   

  return (
    <Col md={12} style={{ padding:'0%' }}>
      <Form >
        <InputGroup className="mb-3" className={classes.textBox}>
<InputGroup.Prepend>
 <InputGroup.Text> <Icon icon={faSearch}/> </InputGroup.Text>
</InputGroup.Prepend>
<Form.Control size="lg" value={value} type="text" placeholder="search for article"  onChange={(event)=>triggerSearch(event.target.value)} />
        </InputGroup>
    
      </Form>
      
    </Col>
  );
}
const mapStateToProps = (state) => {
  return {
    post: state.blog.post,
   
  };
};


export default connect(mapStateToProps)(SearchBox);
