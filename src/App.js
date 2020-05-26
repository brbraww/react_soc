import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/Users-container";
import ProfileContainer from "./components/Profile/Profile-container";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}
                    />
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}
                    />
                    <Route path='/users'
                           render={() => <UsersContainer/>}
                    />
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/bookmarks' render={() => <Bookmarks/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
