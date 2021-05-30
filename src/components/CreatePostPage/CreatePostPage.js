import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { add_post } from "../../store/actions/blogAction";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { faPlus, faImage } from "@fortawesome/free-solid-svg-icons";
import classes from "./CreatePostPage.module.css";
import Icon from "../shared/Icon";
import EditorContainer from "../shared/Editor/EditorContainer";
import { mapOptions } from "../shared/utility";

const CreatePostPage = () => {
  const editorText = useSelector((state) => state.blog.editor, shallowEqual);
  const category = useSelector((state) => state.blog.categories, shallowEqual);

  let post = {
    header: "",
    body: "",
    tags: [],
    image: [],
  };

  const dispatch = useDispatch();
  const [tags, setTags] = useState([]);
  const [val, setVal] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState([]);
  const [isFile, setIsFile] = useState(false);
  const [image, setImage] = useState([]);

  function submit() {
    post = {
      header: title,
      body: editorText,
      tags: tags,
      image: image,
    };

    dispatch(add_post(post));
  }

  const clearBox = () => {
    setTags([]);
    setTitle("");
    setVal("");
    setImage([]);
  };

  const addClick = () => {
    const value = val.toUpperCase();
    if (tags.find((tag) => tag.toUpperCase() === value)) {
      return;
    }
    if (value === "") {
      return;
    }
    setTags([...tags, value]);
    setVal("");
  };

  const deleteTag = (tagIndex) => {
    const newTags = [...tags];
    newTags.splice(tagIndex, 1);
    setTags(newTags);
  };

  const onChange = (e) => {
    setVal(e.target.value);
  };

  const handleChange = (event) => {
    const files = URL.createObjectURL(event.target.files[0]);
    setImage(event.target.files[0]);
    setFile(files);
    setIsFile(true);
  };

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
            <EditorContainer clearBox={clearBox} isFile={isFile} file={file} />
          </Form.Group>

          <Form.Group>
            <label className={classes.image}>
              <Icon size="2x" icon={faImage} />
              <input type="file" onChange={handleChange} />
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
                  onChange={(e) => onChange(e)}
                  disabled={tags.length === 2 ? true : false}
                >
                  <option disabled value="" selected>
                    Click here to add
                  </option>
                  {mapOptions(category)}
                </Form.Control>

                <ul className={classes.tag}>
                  {tags.map((tag, index) => (
                    <li key={index} onClick={() => deleteTag(index)}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </Col>
              <Col>
                {tags.length === 2 ? null : (
                  <Button variant="primary" onClick={addClick}>
                    <Icon size="1x" icon={faPlus} />
                    Add
                  </Button>
                )}
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className={classes.button_group}>
            <Button variant="primary" onClick={submit}>
              Post
            </Button>

            <Button variant="default">
              <span className={classes.text}> Draft </span>
            </Button>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
};

export default CreatePostPage;
