import React, { Component } from 'react';
import Posts from './Posts/Posts'
import classes from './Blog.module.css';
import {Route} from 'react-router-dom';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
    
   
    
    render () {
       
            
        
       
 return (
   <div className={classes.Blog}>
   <header>
       <nav>
           <ul>
            <li><a href='/posts'>Home</a></li>
            <li><a href='/new-post'>NewPost</a></li>
           </ul>
       </nav>
   </header>
   {/* <Route path='/' exact render={()=><h1>Home</h1>} />
   <Route path='/' exact render={()=><h1>Home2</h1>} /> */}
   <Route path='/posts' exact component={Posts}/>
   <Route path='/new-post'  component={NewPost}/>
      </div>
        );
    }
}

export default Blog;