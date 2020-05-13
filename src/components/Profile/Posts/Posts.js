import React from "react";
import classes from './Posts.module.css'
import Post from "./Post/Post";

const Posts = (props) => {
    let PostsItems = props.PostsData.map( (p) => <Post id={p.id} text={ p.text } likesCount={p.likesCount} /> );

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }
    let onChangePost = () => {
        let newText = newPostElement.current.value;
        props.updateNewPostText(newText);

    }
    return (
        <div className={ classes.all }>

            <div className={ classes.addPost }>
                <textarea
                    id='new-post'
                    onChange={onChangePost}
                    ref={newPostElement}
                    value={props.NewPostText}
                    placeholder='Enter new post'
                />
                <button onClick={ onAddPost }>Add post</button>
            </div>

            <div className={ classes.posts }>
                {PostsItems}
            </div>

        </div>
    );
}

export default Posts;