import React from "react";
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={ classes.header }>
            <img src="https://pngimg.com/uploads/pokemon/pokemon_PNG73.png" alt="логотип"/>
            <div className={classes.loginBlock}>
                {props.isAuth ? <p>{props.login}</p>
                :<NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;
