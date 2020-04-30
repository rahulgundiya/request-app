import React, { Component } from 'react';
import Posts from './Posts/Posts'
import classes from './Blog.module.css';
import {Route ,NavLink ,Switch , Redirect} from 'react-router-dom';
import NewPost from './NewPost/NewPost';
//import FullPost from './FullPost/FullPost';
class Blog extends Component {
    
   
    
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
   
   <Route path='/new-post'  component={NewPost}/>
   <Route path='/posts'  component={Posts}/>
   <Redirect from="/" to="/posts" />
  
   </Switch>
      </div>
        );
    }
}


export default Blog;
