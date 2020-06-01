import ProfileReducer, {addPostActionCreator, deletePost} from "./Profile-reducer";
import {render} from "@testing-library/react";
import App from "../App";
import React from "react";


let state = {
    PostsData: [
        {id: 1, text: 'hello', likesCount: 4},
        {id: 2, text: 'lol kek cheburek', likesCount: 51},
    ]
}

test('length of posts should be incremented', (text = 'kakoi-to text') => {
    let action = addPostActionCreator(text)
    let newState = ProfileReducer(state,action)
    expect(newState.PostsData.length).toBe(3)

});

test('text was added correctly', (text = 'kakoi-to text') => {
    let action = addPostActionCreator(text)
    let newState = ProfileReducer(state,action)
    expect(newState.PostsData[2].text).toBe(text)
});

test('after deleting length of posts should be decrement', (postId=1) => {
    let curLength = state.PostsData.length
    let action = deletePost(postId)
    let newState = ProfileReducer(state,action)
    expect(newState.PostsData.length).toBe(curLength-1)
});

test('after deleting length shouldn`t be decrement if id is incorrect', (postId=10000) => {
    let curLength = state.PostsData.length
    let action = deletePost(postId)
    let newState = ProfileReducer(state,action)
    expect(newState.PostsData.length).toBe(curLength)
});