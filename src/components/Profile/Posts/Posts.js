import React from "react";
import classes from './Posts.module.css'
import Post from "./Post/Post";

const Posts = (props) => {
    let PostsItems = props.PostsData.map( (p) => <Post id={p.id} text={ p.text } likesCount={p.likesCount} /> );

    return (
        <div className={ classes.all }>

            <div className={ classes.create }>
                <textarea name="" cols="" rows=""></textarea>
                <button>Create post</button>
            </div>

            <div className={ classes.posts }>
                {PostsItems}
            </div>

        </div>
    );
}

export default Posts;