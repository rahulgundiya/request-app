import React , {Component} from 'react';
import axios from 'axios';
import Post from  '../../../components/Post/Post'
import classes from './Posts.module.css'
import {Link} from 'react-router-dom';

class Posts extends Component {
    
    state={
        Post:[]
    }
    componentDidMount()
    {
        console.log(this.props);
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
                //this.setState({error:true})
            console.log(error);
            //console.log('Hi');
        })
    }
    postSelectHandler=(id)=>
    {
this.setState({selectedPostId:id});

    }
render()
{
   let Posts=<p style={{textAlign:"center"}}>
    Please something went wrong...</p>
if(!this.state.error)
{

     Posts = this.state.Post.map(post=>{

        return( <Link to={'/' + post.id} key={post.id}><Post key={post.id} title={post.title} 
        author={post.author}
        clicked={()=>this.postSelectHandler(post.id)} /> </Link>)
    
    })
}
    return(
        <section className={classes.Posts}>
        {Posts}
        </section>
    )
}

}
export default Posts;