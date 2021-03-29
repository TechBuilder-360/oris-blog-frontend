import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState} from 'react';
import { Form,Col, InputGroup } from 'react-bootstrap';
import classes from './SearchBox.module.css'
import {connect} from 'react-redux'
import { useDispatch} from "react-redux";

const SearchBox=(props)=> {
  const dispatch=useDispatch()

  const [options, setOptions] = useState([]);
  const [result,setResult]=useState([])
  const [value,setValue]=useState('')

  function triggerSearch(e){
    console.log(e);
  setValue(e)
  var data =props.post.filter(post=>post.header.toLowerCase().includes(value.toLowerCase()))
  setResult(data);
  console.log(data);
  }
  const searchResult=(query)=>{
    return query.map((data,index)=>
  <div>
  {data.header}
  </div>
  )
   }

   const handleSearch = () => {
    setOptions(value != '' ? searchResult(result) : []);
  };


  return (
    <Col md={12} style={{ padding:'0%' }}>
      <Form >
        <InputGroup className="mb-3" className={classes.textBox}>
<InputGroup.Prepend>
 <InputGroup.Text> <FontAwesomeIcon icon={faSearch}/> </InputGroup.Text>
</InputGroup.Prepend>
<Form.Control size="lg" value={value} type="text" placeholder="search for article" onChange={(event)=>triggerSearch(event.target.value)} />
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
