import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/Users-container";
import ProfileContainer from "./components/Profile/Profile-container";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


function App(props) {

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <DialogsContainer />}
                />
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer />}
                />
                <Route path='/users'
                       render={()=><UsersContainer /> }
                />
                <Route path='/news' render={() => <News />}/>
                <Route path='/settings' render={() => <Settings />}/>
                <Route path='/bookmarks' render={() => <Bookmarks />}/>
                <Route path='/music' render={() => <Music />}/>
                <Route path='/login' render={() => <Login />}/>
            </div>
        </div>
    );
}

export default App;
