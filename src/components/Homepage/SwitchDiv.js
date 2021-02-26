import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Category from "../Category/Category";
import Post from '../Post/Post'

const SwitchDiv=()=>{

      return(
            <div>
            <Switch>
            <Route exact path='/:slut' component={Category} />
            <Route  path='/'component={Post} />
            
            </Switch>
            </div>
            
      )
}
export default SwitchDiv