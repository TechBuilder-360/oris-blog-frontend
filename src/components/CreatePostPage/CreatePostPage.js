import React,{useState} from 'react'
import {Tooltip,Row,Col,Form,Button,Image} from 'react-bootstrap'
import {add_post} from '../../store/actions/blogAction'
import { useDispatch } from "react-redux";
import { faPlus} from "@fortawesome/free-solid-svg-icons";
import {connect} from 'react-redux'
import classes from './CreatePostPage.module.css'
import {Editor, EditorState,RichUtils,getDefaultKeyBinding, KeyBindingUtil } from 'draft-js';
import Icon from '../shared/Icon'
import 'draft-js/dist/Draft.css';
import { btn,blockTypeButtons,headers,PluginsBtn,BlockButton,TextButton,styleMap

} from './Settings'



const CreatePostPage=(props)=>{

      const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );

let post={
      
      header:'',
      body:'',
      tags:[],

}


    

const dispatch=useDispatch()
const [tags, setTags] = useState([])
const [val,setVal]= useState('')
const [title,setTitle]=useState('')
const [body,setBody]=useState('')







 
  


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


      const  handleKeyCommand=(command)=> {
    if (!editorState && command === 'highlight') {
  editorStat = RichUtils.toggleInlineStyle(editorState, 'HIGHLIGHT');
}
    const editorStat = RichUtils.handleKeyCommand(editorState, command);
    if (editorStat) {
      setEditorState(editorStat)
      return 'handled';
    }

    return 'not-handled';
  }   

function toggleBlockType (event){
    event.preventDefault();

    let block = event.currentTarget.getAttribute('data-block');
    
      setEditorState(RichUtils.toggleBlockType(editorState, block)
    )
  }
function toggleInlineStyle(event) {
    event.preventDefault();
    let style = event.currentTarget.getAttribute('data-style');
    
      setEditorState(
RichUtils.toggleInlineStyle(editorState, style)

      ) 
  }


const keyBindingFunction=(event)=> {
  if (KeyBindingUtil.hasCommandModifier(event) && event.shiftKey && event.key === 'x') {
    return 'strikethrough';
  }

  if (KeyBindingUtil.hasCommandModifier(event) && event.shiftKey && event.key === '7') {
    return 'ordered-list';
  }

  if (KeyBindingUtil.hasCommandModifier(event) && event.shiftKey && event.key === '8') {
    return 'unordered-list';
  }

  if (KeyBindingUtil.hasCommandModifier(event) && event.shiftKey && event.key === '9') {
    return 'blockquote';
  }
if (KeyBindingUtil.hasCommandModifier(event) && event.shiftKey && event.key === 'h') {
  return 'highlight';
}
  return getDefaultKeyBinding(event);
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
onChange={(e)=>setTitle(e.target.value)} />
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
                                                <br/>
                                                <div className={classes.btnGroup}>
                                                <div className={classes.toolbar}>
                                                  
                                               
          {btn.map((button) => {
            return PluginsBtn(button.value, button.style,button.icon,editorState,toggleInlineStyle);
          })}
              
       
          {headers.map((button) => {
            return TextButton(button.value, button.block,RichUtils,toggleBlockType,editorState)
          })}
        
     
          {blockTypeButtons.map((button) => {
            return BlockButton(button.value, button.block,button.icon,RichUtils,toggleBlockType,editorState);
          })}
        </div>
        </div>
                      <div className={classes.editor}>
                        <Editor 
                        customStyleMap={styleMap}
                        placeholder={"Start typing!"}
                        editorState={editorState} 
                        handleKeyCommand={handleKeyCommand}
                        onChange={setEditorState} />
                                   </div>     
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
        <Button variant="secondary" onClick={addClick}><Icon size="1x" icon={faPlus} />Add</Button>
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