import React,{useEffect,useState} from 'react';
import axios from 'axios'
import {Card,Spinner} from 'react-bootstrap'
import classes from './TabContent.module.css'
import dateFormat from 'dateformat';

const Draft=()=>{
   const [data,setData]=useState([])
   const [loading,setLoading]=useState(true)

useEffect(() =>{
  axios
  .get('https://demo-orisblog-backend.herokuapp.com/api/v1/blog/posts?status=draft')
  .then((res)=> {
    setData(res.data.data)
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
         size=" lg"
         />
         </div>
         :
         
        ( data.length > 0 ?
          data.map((da,index)=>(
          <Card border="light" key={index}>
          <Card.Body>
        <Card.Title>{da.title}</Card.Title>  
          <Card.Text><em className={classes.dateText}>
          {dateFormat(data.datecreated,"dddd, mmmm dS, yyyy, h:MM:ss TT")}</em>
          </Card.Text>
        </Card.Body>
          </Card>
        )):
        <em className={classes.empty}>empty!!</em>
        )
      }
    </div>
  );
}

export default Draft;
