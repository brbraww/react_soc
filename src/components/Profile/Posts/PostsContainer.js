import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/Profile-reducer";
import Posts from "./Posts";

const PostsContainer = (props) => {
    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    let onChangePost = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }
    return (
        <Posts addPost={addPost}
               updateNewPostText={onChangePost}
               PostsData={state.ProfilePage.PostsData}
               NewPostText={state.ProfilePage.NewPostText}
        />
    );
}

export default PostsContainer;