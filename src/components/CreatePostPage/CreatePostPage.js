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
import { CloudinaryUnsigned } from 'puff-puff/CKEditor';
//import CodeBlock from '@ckeditor/ckeditor5-code-block/src/code-block';


const CreatePostPage=(props)=>{
let post={
      
      header:'',
      body:'',
      tags:[],

}
function imagePluginFactory(editor){
      editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
        return new CloudinaryUnsigned( loader, 'footepl', 'spiy0dwb', [ 160, 500, 1000, 1052 ]);
      }
    }

    

const dispatch=useDispatch()
const [tags, setTags] = useState([])
const [val,setVal]= useState('')
const [title,setTitle]=useState('')
const [body,setBody]=useState('')


const onChange = (event, editor) => {
      const data = editor.getData();
      setBody(data);
    };
  
    React.useEffect(() => {});
  
  


function submit(){
     post={
            header:title,
            body:body,
            tags:tags,
      }
      console.log(post)
      dispatch(add_post(post))
}   

function clearBox(){
setTags([])
setTitle('')
setBody('')
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
            <Row>
<Col md={2}>
                            </Col> 

      
         <Col md={8}>
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
                                            <Col>
                                          <Form.Label>
                                            Articles
                                                </Form.Label>
                        <CKEditor


         editor={ ClassicEditor }
                    
                    
                        
                    
                    onChange={onChange}
                    data={body}
                    onReady={(e) => console.log(e)}
                />                             
                       </Col>
                       </Form.Group> 
                       <Form.Group>
                                   <Form.Label>
                                        <b>Tags:  </b>
                                         <span className={classes.max}>(<i>
                                              max 2 can be selected</i>)
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
                            </Col>
                            <Col md={2}>
                            </Col>         
            </Row>
      )


}

const mapStateToProps = (state) => {
      return {
        
        category:state.blog.categories
      };
    };
    
    export default connect(mapStateToProps)(CreatePostPage);