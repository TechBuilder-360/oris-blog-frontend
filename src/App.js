import React ,{useState} from "react";
import { Container, Row,Form, Col } from "react-bootstrap";
import HomeNavBar from "./components/Navigation/main-navigation";
import Wrapper from "./container/Container";
import Homepage from "./components/Homepage/Homepage";
import CreatePostPage from "./components/CreatePostPage/CreatePostPage";
import { Route, Switch } from "react-router-dom";
import classes from './App.module.css'
import Error404 from "./components/Special Page/Error404";
import SinglePostView from "./components/SinglePostView/SinglePostView";
import SearchDisplay from './components/SearchDisplay/SearchDisplay'
import {connect} from 'react-redux'



function App(props) {
const [searchable, setSearchable]=useState(false)
const [searchresult, setSearchresult]=useState([])
const [value, setValue]=useState('')

function triggerSearch(e){

setSearchable(true)
setValue(e)
var data =props.post.filter(post=>post.header.toLowerCase().includes(value.toLowerCase()))
setSearchresult(data);

}

  const routes = (
    <Switch style={{ paddingLeft: "0" }}>
     
      <Route  exact path="/create" component={CreatePostPage} />
      <Route exact path="/post/:id" component={SinglePostView}/>
      <Route  path="/" component={Homepage} />
      <Route path="*" component={Error404} />
    </Switch>
  );

  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <HomeNavBar />
        </Col>
        <Col md={12}>
       
       <Row>
      <Col md={9}></Col><Col md={3}>
      <Form >
      <Form.Control type='text' className={classes.search} value={value} placeholder="search" onChange={
        (event)=>triggerSearch(event.target.value)}  
        onBlur={()=>
        {setSearchable(false)
        setValue('')
        }
        }/>
</Form>

      </Col>
</Row>
        
      </Col >
      <Col md={12}>
      {searchable? <SearchDisplay results={searchresult}/>:
        <Wrapper>{routes}</Wrapper>
}
      </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    post: state.blog.post
  };
};

export default connect(mapStateToProps)(App);
