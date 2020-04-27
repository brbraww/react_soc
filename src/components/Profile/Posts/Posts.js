import React from "react";
import classes from './Posts.module.css'
import Post from "./Post/Post";

const Posts = () => {
    return (
        <div className={ classes.all }>

            <div className={ classes.create }>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Create post</button>
            </div>

            <div className={ classes.posts }>
                <Post message = 'hello'/>
                <Post message = 'lol kek cheburek' />
            </div>

        </div>

    );
}

export default Posts;