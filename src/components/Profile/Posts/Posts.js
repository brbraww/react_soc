import React from "react";
import classes from './Posts.module.css'
import Post from "./Post/Post";




const Posts = () => {
    let PostsData = [
        {id: 1, text: 'hello', likesCount: 4},
        {id: 2, text: 'lol kek cheburek', likesCount: 51},
    ]
    let PostsItems = PostsData.map( (p) => <Post id={p.id} text={ p.text } likesCount={p.likesCount} /> );

    return (
        <div className={ classes.all }>

            <div className={ classes.create }>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Create post</button>
            </div>

            <div className={ classes.posts }>
                {PostsItems}
            </div>

        </div>

    );
}

export default Posts;