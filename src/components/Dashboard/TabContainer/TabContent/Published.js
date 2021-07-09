import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Card,Spinner} from 'react-bootstrap'
import classes from './TabContent.module.css'
import dateFormat from 'dateformat';

const Published=()=>{
  const [post,setPost]=useState([])
  const [loading,setLoading]=useState(true)
  
useEffect(() =>{
  axios
  .get('https://demo-orisblog-backend.herokuapp.com/api/v1/blog/posts?status=published')
  .then((res)=> {
    setPost(res.data.data)
    setLoading(false)
  });
}, [])

  return (
    <div>
        {loading ? 
        <div className={classes.spinner}> 
        <Spinner 
        variant="secondary" 
        animation="border"
         size=" lg"/> 
         </div>:
        post.map((data,index)=>(
         <Card border="light" key={index}>
         <Card.Body>
        <Card.Title>{data.title}</Card.Title>  
        <Card.Text><em className={classes.dateText}>
         {dateFormat(data.datecreated,"dddd, mmmm dS, yyyy, h:MM:ss TT")}</em>
         </Card.Text>
          </Card.Body>
          </Card> 
        ))
      }
    </div>
  );
}
export default Published;
