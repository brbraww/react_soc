const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let store = {
    _state : {
        ProfilePage: {
            PostsData: [
                {id: 1, text: 'hello', likesCount: 4},
                {id: 2, text: 'lol kek cheburek', likesCount: 51},
            ],
            NewPostText: 'something',
        },
        DialogsPage: {
            DialogsData: [
                {id: 1, name: 'Amidomaru'},
                {id: 2, name: 'Yo'},
                {id: 3, name: 'Riko'},
                {id: 4, name: 'Moon'},
                {id: 5, name: 'Ogurchik'},
            ],
            MessagesData: [
                {id: 1, chatId: 1, text: 'Ya Amidomaru'},
                {id: 1, chatId: 2, text: 'Yo Yo'},
                {id: 1, chatId: 3, text: 'Ya Riko'},
                {id: 1, chatId: 4, text: 'Ya Moon'},
                {id: 1, chatId: 5, text: 'Ya Ogurchik'},
            ],
        },
        sidebar: {
        },
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;   // observer pattern
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let NewPost = {
                id: 3,
                text: this._state.ProfilePage.NewPostText,
                likesCount: 0,
            };
            this._state.ProfilePage.PostsData.push(NewPost);
            this._state.ProfilePage.NewPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.ProfilePage.NewPostText = action.newText;
            this._callSubscriber(this._state);
        }
    },
}

export const addPostActionCreator = () => ({
    type: ADD_POST,
})
export const updateNewPostTextActionCreator = (newText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText,
})


window.store = store;

export default store;