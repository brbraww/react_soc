import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfileReducer from "./Profile-reducer";
import DialogsReducer from "./Dialogs-reducer";
import SidebarReducer from "./Sidebar-reducer";
import UsersReducer from "./Users-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import appReducer from "./app-reducer";

let reducers = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogsReducer,
    sidebar: SidebarReducer,
    UsersPage: UsersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));
window.store = store;

export default store;