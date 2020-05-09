import React from "react";
import classes from './Posts.module.css'
import Post from "./Post/Post";

const Posts = (props) => {
    let PostsItems = props.PostsData.map( (p) => <Post id={p.id} text={ p.text } likesCount={p.likesCount} /> );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost()
    }
    let onChangeTextArea = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }
    return (
        <div className={ classes.all }>

            <div className={ classes.addPost }>
                <textarea id='new-post' onChange={onChangeTextArea} ref={newPostElement} value={props.NewPostText}/>
                <button onClick={ addPost }>Add post</button>
            </div>

            <div className={ classes.posts }>
                {PostsItems}
            </div>

        </div>
    );
}

export default Posts;