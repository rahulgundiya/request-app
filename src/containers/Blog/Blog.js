import React, { Component } from 'react';
//import Posts from './Posts/Posts'
import classes from './Blog.module.css';
import {Route} from 'react-router-dom';

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
   <Route path='/' exact render={()=><h1>Home</h1>} />
   <Route path='/' exact render={()=><h1>Home2</h1>} />
      </div>
        );
    }
}

export default Blog;