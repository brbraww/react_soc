import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SAVE_PHOTO = 'profile/SAVE_PHOTO';


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
        case SAVE_PHOTO: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
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
export const savePhotoSuccess = (photos) => ({
    type: SAVE_PHOTO,
    photos,
})

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));

}
export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}
export const updateStatus = (status) =>  async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0 ) {
        dispatch(setStatus(status));
    }
}
export const savePhoto = (file) =>  async (dispatch) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0 ) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}
export const saveUserInfo = (userInfo) =>  async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveUserInfo(userInfo)
    if (response.data.resultCode === 0 ) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}

export default ProfileReducer;