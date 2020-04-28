import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import classes from './Blog.module.css';

class Blog extends Component {
    state={
        Post:[],
        selectedPostId:null,  
        error:false
    }
    componentDidMount()
    {
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            const post = response.data.slice(0,4);
            const updatedPost = post.map(posts=>{
                return {
                    ...posts,
                    author:'Max'
                }
            })
            this.setState({Post:updatedPost})
           
            })
            .catch(error=>{
                this.setState({error:true})
           // console.log(response);
            //console.log('Hi');
        })
    }
    postSelectHandler=(id)=>
    {
this.setState({selectedPostId:id});

    }
    render () {
        let Posts=<p style={{textAlign:"center"}}>
            Please something went wrong...</p>
        if(!this.state.error)
        {

             Posts = this.state.Post.map(post=>{

                return <Post key={post.id} title={post.title} 
                author={post.author}
                clicked={()=>this.postSelectHandler(post.id)} />
            
            })
            
        }
       
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
             

     <section className={classes.Posts}>
     {Posts}
     </section>
     <section>
    <FullPost id={this.state.selectedPostId} />
    </section>
    <section>
     <NewPost />
     </section>
     </div>
        );
    }
}

export default Blog;