import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import {BrowserRouter, Route} from "react-router-dom";


function App(props) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               store={props.store}/>}/>
                    <Route path='/profile'
                           render={() => <Profile
                               state={props.state.ProfilePage}
                               dispatch={props.dispatch}/>}/>
                    <Route path='/news' render={() => <News />}/>
                    <Route path='/settings' render={() => <Settings />}/>
                    <Route path='/bookmarks' render={() => <Bookmarks />}/>
                    <Route path='/music' render={() => <Music />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
