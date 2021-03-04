import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Category from "../Category/Category";
import Post from '../Post/Post'
import { connect } from "react-redux";


const SwitchDiv=(props)=>{

      return(
            <div>
            <Switch>
            <Route exact path='/:slut' component={Category} />
            <Route  path='/'>
            <Post post={props.post}/>
            </Route>
            </Switch>
            </div>
            
      )
}

const mapStateToProps = (state) => {
  return {
    post: state.blog.post
  };
};

export default connect(mapStateToProps)(SwitchDiv);