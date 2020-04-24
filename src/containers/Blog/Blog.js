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
            this.setState({Post:response.data})
           // console.log(response);
            //console.log('Hi');
        })
    }
    render () {
        const Posts = this.state.Post.map(post=>{

            return <Post key={post.id} title={post.title} />
        
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