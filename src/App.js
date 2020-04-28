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


function App() {
  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Header/>
              <Nav/>
              <div className='app-wrapper-content'>
                  <Route path='/dialogs' component={Dialogs}/>
                  <Route path='/profile' component={Profile}/>
                  <Route path='/news' component={News}/>
                  <Route path='/settings' component={Settings}/>
                  <Route path='/bookmarks' component={Bookmarks}/>
                  <Route path='/music' component={Music}/>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
