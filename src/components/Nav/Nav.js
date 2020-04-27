import React from "react";
import classes from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={ classes.nav }>
            <div>Profile</div>
            <div>News</div>
            <div>Messages</div>
            <div>Music</div>
            <div>Bookmarks</div>
        </nav>
    );
}

export default Nav;