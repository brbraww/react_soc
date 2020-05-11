import ProfileReducer from "./Profile-reducer";
import DialogsReducer from "./Dialogs-reducer";
import SidebarReducer from "./Sidebar-reducer";

let store = {
    _state : {
        ProfilePage: {
            PostsData: [
                {id: 1, text: 'hello', likesCount: 4},
                {id: 2, text: 'lol kek cheburek', likesCount: 51},
            ],
            NewPostText: '',
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
            newMessageText: '',
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
        this._state.ProfilePage = ProfileReducer(this._state.ProfilePage, action);
        this._state.DialogsPage = DialogsReducer(this._state.DialogsPage, action);
        this._state.sidebar = SidebarReducer(this._state.DialogsPage, action);

        this._callSubscriber(this._state);
    },
}

window.store = store;

export default store;