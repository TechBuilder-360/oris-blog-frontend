import React,{useState} from 'react'
import {Tooltip,Row,Col,Form,Button,Image} from 'react-bootstrap'
import {add_post} from '../../store/actions/blogAction'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { faPlus,faCamera } from "@fortawesome/free-solid-svg-icons";
import {connect} from 'react-redux'
import classes from './CreatePostPage.module.css'
const CreatePostPage=(props)=>{
let posts={
      
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


function submit(){
     posts={
           
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

function addClick(){
const value=val.toUpperCase()
if(tags.length > 1){
      alert('maximum of two can be selected')
      return null;
}
     if(tags.find(tag=>tag.toUpperCase()===value)){
                    return;
                   }
             setTags([...tags,value])     
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
</Col>
         </Row>  
         </Form.Group>
         <Form.Group>
               <Col md={12} >
                     <Form.Label>Cover Image</Form.Label>
                           <div className={classes.div}>
                                 {image==''?'':
                  <Image src={image} rounded fluid />                                  }
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
                                            <Col>
                                          <Form.Label>
                                            Articles
                                                </Form.Label>
                                                <CKEditor
                    editor={ ClassicEditor }
                    
                    data=""
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setBody(data)
                    } }
                />                             
                       </Col>
                       </Form.Group> 
                       <Form.Group>
                                   <Form.Label>
                                        <b>Tags:  </b> <span className={classes.max}><i>
                                              max 2 can be selected</i>
                              <span style={{ color:'red' }}>*</span></span>
                                   </Form.Label>
                                   <Row>
                             <Col>
      <Form.Control as="select" className={classes.input} 
 onChange={(e)=>
       setVal(e.target.value)
      
 } >
      <option disabled>SELECT</option>
      {props.category.map((cat,index)=>
      
      <option key={index} value={cat}>{cat}</option>
      )}

</Form.Control>
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