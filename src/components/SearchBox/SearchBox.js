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
      
        
        <div className={classes.input_icons}>
        <i> <Icon className={classes.icon} icon={faSearch}/> </i>
            <input value={value} className={classes.input_field} type="text" onChange={(event)=>triggerSearch(event.target.value)}/>
      </div>
      
    </Col>
  );
}
const mapStateToProps = (state) => {
  return {
    post: state.blog.post,
   
  }
};


export default connect(mapStateToProps)(SearchBox);
