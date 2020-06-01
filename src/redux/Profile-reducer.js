import {profileAPI} from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';

let initialState = {
    PostsData: [
        {id: 1, text: 'hello', likesCount: 4},
        {id: 2, text: 'lol kek cheburek', likesCount: 51},
    ],
    profile: null,
    status: "",
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let NewPost = {
                id: 3,
                text: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                PostsData: [...state.PostsData, NewPost],
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                PostsData: state.PostsData.filter(p => p.id !== action.postId)
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({
    type: ADD_POST,
    newPostText,
})
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
})
export const setStatus = (status) => ({
    type: SET_STATUS,
    status,
})
export const deletePost = (postId) => ({
    type: DELETE_POST,
    postId,
})

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));

}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}
export const updateStatus = (status) =>  async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0 ) {
        dispatch(setStatus(status));
    }
}

export default ProfileReducer;