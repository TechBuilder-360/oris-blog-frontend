import React,{useEffect,useState} from 'react';
import {Row,Col,Tab,Nav} from 'react-bootstrap'
import Draft from './TabContent/Draft'
import Published from './TabContent/Published'
import { useSelector } from "react-redux";
import axios from 'axios'



const TabContainer=()=> {
const [draft,setDraft]=useState([])
const [published,setPublished]=useState([])
const [eventKey,setEventKey]=useState('draft')
const [active, setActive]=useState(true)

useEffect(() =>{
  axios
  .get('https://demo-orisblog-backend.herokuapp.com/api/v1/blog/posts?status=published')
  .then((res)=> {
    setPublished(res.data.data)
  });
   axios
  .get('https://demo-orisblog-backend.herokuapp.com/api/v1/blog/posts?status=draft')
  .then((res)=> {
    setDraft(res.data.data)
  });
}, [])

const onClickDraft=()=>{
  setEventKey('draft')
  setActive(true)
}
const onClickPublish=()=>{
  setEventKey('published')
  setActive(false)
}
  return (
     
    <Row>
      <Col md={12} >
        <Nav>
          <Nav.Item onFocus={onClickDraft} >
            <Nav.Link className={active? 'active':''}>Draft ({draft.length})</Nav.Link>
          </Nav.Item>
          <Nav.Item onClick={onClickPublish}>
            <Nav.Link className={!active? 'active':''} >Published ({published.length})</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col md={12}>
      {eventKey =='draft'? <Draft/>:<Published/>}
      </Col>
    </Row>

  );
}

export default TabContainer;
