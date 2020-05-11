import {combineReducers, createStore} from "redux";
import ProfileReducer from "./Profile-reducer";
import DialogsReducer from "./Dialogs-reducer";
import SidebarReducer from "./Sidebar-reducer";

let reducers = combineReducers({
    ProfilePage: ProfileReducer,
    DialogsPage: DialogsReducer,
    sidebar: SidebarReducer,
});

let store = createStore(reducers);

export default store;