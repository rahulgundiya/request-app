import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import classes from './Blog.module.css';

class Blog extends Component {
    state={
        Post:[]
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
           // console.log(response);
            //console.log('Hi');
        })
    }
    render () {
        const Posts = this.state.Post.map(post=>{

            return <Post key={post.id} title={post.title} 
            author={post.author} />
        
        })
        return (
            <div>
                <section className={classes.Posts}>
                   {Posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;