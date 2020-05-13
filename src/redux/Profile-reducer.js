const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    PostsData: [
        {id: 1, text: 'hello', likesCount: 4},
        {id: 2, text: 'lol kek cheburek', likesCount: 51},
    ],
    NewPostText: '',
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
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST,
})
export const updateNewPostTextActionCreator = (newText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText,
})


export default ProfileReducer;