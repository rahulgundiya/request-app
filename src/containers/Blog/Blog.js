import React, { Component } from 'react';
import Posts from './Posts/Posts'
import classes from './Blog.module.css';

class Blog extends Component {
    
   
    
    render () {
       
            
        
       
 return (
   <div className={classes.Blog}>
   <header>
       <nav>
           <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/new-post'>NewPost</a></li>
           </ul>
       </nav>
   </header>
   <Posts/>
      </div>
        );
    }
}

export default Blog;