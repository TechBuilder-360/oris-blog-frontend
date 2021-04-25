import React, { useState } from "react";
import { Row, Col, Form, Button} from "react-bootstrap";
import { add_post } from "../../store/actions/blogAction";
import { useDispatch } from "react-redux";
import { faPlus,faImage } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import classes from "./CreatePostPage.module.css";
import Icon from "../shared/Icon";
import EditorContainer from "../shared/Editor/EditorContainer";
import { mapOptions } from "../shared/utility";

const CreatePostPage = (props) => {
  let post = {
    header: "",
    body: "",
    tags: [],
    image:[],
  };
  
  const dispatch = useDispatch();
  const [tags, setTags] = useState([]);
  const [val, setVal] = useState("");
  const [title, setTitle] = useState("");
  const [btnVisible,setBtnVisible]=useState(true)
  const [file,setFile]=useState([])
  const [isFile,setIsFile]=useState(false)
  const [image,setImage]=useState([])
  
  function submit() {
    post = {
      header: title,
      body: props.editorText,
      tags: tags,
      image:image,
    };
    
    dispatch(add_post(post));
  }
  function clearBox(){
    setTags([]);
    setTitle("");
    setVal("");
    setImage([]);
    
  }

  function addClick(){
    const value = val.toUpperCase();
    if (tags.find((tag) => tag.toUpperCase() === value)) {
      return;
    }
    if(value === ""){
      return
    }
    setTags([...tags, value]);
    setVal("")
    
  }
  
  function deleteTag(i) {
    const newTags = [...tags];
    if (tags.length < 1) {
      setBtnVisible(true)
      }
    newTags.splice(i, 1);
    setTags(newTags);
    
  }
  function onChange(e){
    setVal(e.target.value)
      if (tags.length > 1) {
        setBtnVisible(false)
        }else{
          setBtnVisible(true)
        }
    }

  function handleChange(event){
const files=URL.createObjectURL(event.target.files[0])
setImage(event.target.files[0])
setFile(files)
setIsFile(true)

  }
  

  return (
    <Row>
      
      <Col md={12}>
        <Form className={classes.form}>
          <Form.Group>
            <Row>
              <Col md={12} sm={12} xs={12}>
                <Form.Control
                  type="text"
                  value={title}
                  name="title"
                  className={classes.title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title"
                  autoFocus
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group>
            <EditorContainer clearBox={clearBox} isFile={isFile} file={file}/>
          </Form.Group>

<Form.Group>
<label  className={classes.image}>
<Icon size="2x" icon={faImage} /> 
<input type="file" onChange={handleChange}/>
  </label>
</Form.Group>

          <Form.Group>
            <Form.Label>
              <b>Category: </b>
              <span className={classes.max}>
                (<i>max 2 can be selected</i>)
                <span style={{ color: "red" }}>*</span>
              </span>
            </Form.Label>
            <Row>
              <Col>
                <Form.Control
                  as="select"
                value={val}
                  className={classes.input}
                  onChange={(e)=> onChange(e)
                
                }
                  >
                 <option disabled value="" selected>Click here to add</option>
                  {mapOptions(props.category)}
                </Form.Control>

                <ul className={classes.tag}>
                  {tags.map((tag, index) => 
                    <li key={index} onClick={() => deleteTag(index)}>
                      {tag}
                    </li>
                  )}   
                </ul>
              </Col>
              <Col>
              {btnVisible?
               <Button variant="secondary" onClick={addClick}>
               <Icon size="1x" icon={faPlus} />
               Add
             </Button>
             :null
              }
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className={classes.button_group}>
            <Button variant="secondary" onClick={submit}>
              Post
            </Button>
           
            <Button variant="default">Draft</Button>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => {
  return {
    editorText: state.blog.editor,
    category: state.blog.categories,
  };
};

export default connect(mapStateToProps)(CreatePostPage);
