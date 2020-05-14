import React from "react";
import classes from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={ classes.nav }>
            <div>
                <NavLink to='/news' activeClassName={ classes.active_link }>News</NavLink>
            </div>
            <div>
                <NavLink to="/profile" activeClassName={ classes.active_link }>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/users' activeClassName={ classes.active_link }>Users</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" activeClassName={ classes.active_link }>Dialogs</NavLink>
            </div>
            <div>
                <NavLink to='/music' activeClassName={ classes.active_link }>Music</NavLink>
            </div>
            <div>
                <NavLink to='/bookmarks' activeClassName={ classes.active_link }>Bookmarks</NavLink>
            </div>
            <div>
                <NavLink to='/settings' activeClassName={ classes.active_link }>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Nav;