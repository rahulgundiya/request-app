import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import classes from './Blog.module.css';

class Blog extends Component {
    componentDidMount()
    {
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            console.log(response);
            console.log('Hi');
        })
    }
    render () {
        return (
            <div>
                <section className={classes.Posts}>
                    <Post />
                    <Post />
                    <Post />
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