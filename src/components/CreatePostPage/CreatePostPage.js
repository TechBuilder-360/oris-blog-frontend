import React, { useState } from "react";
import axios from "axios";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useSelector, shallowEqual } from "react-redux";
import { faPlus, faImage } from "@fortawesome/free-solid-svg-icons";
import classes from "./CreatePostPage.module.css";
import Icon from "../shared/Icon";
import EditorContainer from "../shared/Editor/EditorContainer";
import { mapOptions } from "../shared/utility";
import Toast from "react-bootstrap/Toast";

const CreatePostPage = () => {
  const editorText = useSelector((state) => state.blog.editor, shallowEqual);
  const category = useSelector((state) => state.blog.categories, shallowEqual);

  const [tags, setTags] = useState([]);
  const [val, setVal] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState([]);
  const [isFile, setIsFile] = useState(false);
  const [showA, setShowA] = useState(false);
  const [message, setMessage] = useState("");

  const closeToast = () => {
    setShowA(false);
  };

  function submit() {
    var post = {
      title: title,
      authorid: "jubril1234",
      article: editorText,
      categories: tags,
      status: "published",
    };

    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/posts/jubril1234`,
        post,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (res) {
        setShowA(true);
        setMessage("Successfully Added ");
      })
      .catch(function (err) {
        setShowA(true);
        setMessage("Error Occured ");
      });
  }

  const clearBox = () => {
    setTags([]);
    setTitle("");
    setVal("");
    // setImage([]);
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
    // setImage(event.target.files[0]);
    setFile(files);
    setIsFile(true);
  };

  return (
    <Row>
      <Col md={12}>
        <Toast show={showA} onClose={closeToast} delay={10000} autohide>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
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
                  <Button
                    className={classes.btn}
                    variant="primary"
                    onClick={addClick}
                  >
                    <Icon size="1x" icon={faPlus} />
                    Add
                  </Button>
                )}
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className={classes.button_group}>
            <Button className={classes.btn} variant="primary" onClick={submit}>
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
