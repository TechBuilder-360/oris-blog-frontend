import React,{useState} from 'react'
import {Tooltip,Row,Col,Form,Button,Image} from 'react-bootstrap'
import {add_post} from '../../store/actions/blogAction'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { faPlus,faCamera } from "@fortawesome/free-solid-svg-icons";
import {connect} from 'react-redux'
import classes from './CreatePostPage.module.css'
const CreatePostPage=(props)=>{
let posts={
      category_id:null,
      header:'',
      body:'',
      image:[],
      tags:[],

}
const dispatch=useDispatch()
const [tags, setTags] = useState([])
const [val,setVal]= useState('')
const [image,setImage]=useState('')
const [imaget,setImaget]=useState([])
const [title,setTitle]=useState('')
const [body,setBody]=useState('')
const [catid,setCatId]=useState(null)

function submit(){
     posts={
           category_id:catid,
            header:title,
            body:body,
            image:imaget,
            tags:tags,
      }
      console.log(posts)

      dispatch(add_post(posts))
}   

function clearBox(){
setTags([])
setTitle('')
setBody('')
setImage('')
setImaget([])
setVal('')

}

function addClick(e){
const value=val.toUpperCase()
     if(tags.find(tag=>tag.toUpperCase()===value)){
                   setVal('')
                    return;
                   }
             setTags([...tags,value])
                  setVal('')
      }
function deleteTag(i){
           const newTags=[...tags]
            newTags.splice(i,1)
            setTags(newTags)
          }




      return(
<div>         
<Form className={classes.form}>
<Form.Group>
<Row>

<Col md={6} sm={12} xs={12}>

<Form.Label>Title</Form.Label>
<Form.Control type="text" value={title} name="title" className={classes.input}
onChange={(e)=>setTitle(e.target.value)}

/>

</Col>

<Col>
<Form.Label>Select Category:</Form.Label>
<Form.Control as="select" className={classes.input} 
 onChange={(e)=>setCatId(e.target.value)} >
      <option disabled>SELECT</option>
      {props.category.map((cat,index)=>
      
      <option key={index} value={index}>{cat}</option>
      )}

</Form.Control>
</Col>
         </Row>  
         </Form.Group>

         <Form.Group>
               <Col md={12} >
               
               
         
      
                     <Form.Label>Cover Image</Form.Label>
                     
                     
                           <div className={classes.div}>
                                 {image==''?'':

<Image src={image} rounded fluid />
}
                           
                           <Form.Label className={classes.upload_btn}>
                           <Form.Control type="file" value='' 
                           onChange={(e)=>{
                  setImage(URL.createObjectURL(e.target.files[0]))
                  setImaget(e.target.files[0])
                           }
                        }/>

                           <FontAwesomeIcon icon={faCamera}/>
                           </Form.Label>
                        
                        
                                  </div>
                           
                           
                           
                                
                                    

                              

                                    
                                      </Col>
                                      </Form.Group>
                                      <Form.Group>
                       <Col >
                           
<Form.Label>
      Articles
</Form.Label>

<Form.Control as='textarea' value={body} rows={4} name="body" className={classes.input}
onChange={(e)=>setBody(e.target.value)}

/>

                           
                       
                       </Col>
                       </Form.Group> 


                       
                       <Form.Group>
                                   <Form.Label>
                                         Tags:
                                   </Form.Label>
                                   <Row>
                             <Col>
                             
<Form.Control type="text" value={val} className={classes.input} 
name='tags' onChange={(e)=>setVal(e.target.value)}/>
<ul className={classes.tag}>

{tags.map((tag,index)=>
          <li key={index} onClick={()=>deleteTag(index)}>
                {tag}
          </li>                
                            )}
      
</ul></Col>
                             <Col>
        <Button variant="secondary" onClick={addClick}><FontAwesomeIcon icon={faPlus} />Add</Button>
                             </Col>
                             </Row> 
                             </Form.Group>
                                  <Form.Group className={classes.button_group}>
                                        <Button variant="secondary" onClick={submit}>Post</Button>
                                        <Button variant="secondary" onClick={clearBox}>Clear</Button>
                                        <Button variant="default">Draft</Button>

                                  </Form.Group>
                            </Form>             
                 
               

            </div>
      )


}

const mapStateToProps = (state) => {
      return {
        
        category:state.blog.categories
      };
    };
    
    export default connect(mapStateToProps)(CreatePostPage);