import React, { Component } from 'react';
import Posts from './Posts/Posts'
import classes from './Blog.module.css';
import {Route ,NavLink ,Switch , Redirect} from 'react-router-dom';
import aysncComponent from '../../hoc/asyncComponent';
const asyncNewPost =  aysncComponent(()=>{
    return  import('./NewPost/NewPost')
})
class Blog extends Component {
    state={
        auth:true
    }
   
    
    render () {
       return (
   <div className={classes.Blog}>
   <header>
       <nav>
           <ul>
            <li><NavLink to="/posts/"
             exact
             activeClassName="my-active" 
             activeStyle={{color:"#fa923f",
             textDecoration:"underline"}} >Posts</NavLink></li>
            <li><NavLink to={{
                pathname:'/new-post',
                has:'#submit',
                search:'?quick-submit=true'
            }}>NewPost</NavLink></li>
           </ul>
       </nav>
   </header>
   {/* <Route path='/' exact render={()=><h1>Home</h1>} />
   <Route path='/' exact render={()=><h1>Home2</h1>} /> */}
  
   <Switch>
   
  {this.state.auth ?<Route path='/new-post'  component ={asyncNewPost} />:null }
   <Route path='/posts'  component={Posts}/>
    <Route render={()=><h1>Page no Found</h1>} /> 
    {/* <Redirect from="/" to="/posts" />  */}
   </Switch>
      </div>
        );
    }
}


export default Blog;
