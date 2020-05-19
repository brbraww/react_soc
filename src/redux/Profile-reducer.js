import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    PostsData: [
        {id: 1, text: 'hello', likesCount: 4},
        {id: 2, text: 'lol kek cheburek', likesCount: 51},
    ],
    NewPostText: '',
    profile: null,
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let NewPost = {
                id: 3,
                text: state.NewPostText,
                likesCount: 0,
            };
            return {
                ...state,
                PostsData: [...state.PostsData, NewPost],
                NewPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                NewPostText: action.newText,
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST,
})
export const updateNewPostTextActionCreator = (newText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText,
})
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        });
    }
}

export default ProfileReducer;