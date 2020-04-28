import React from "react";
import classes from './Profile.module.css'
import Posts from "./Posts/Posts";

const Profile = () => {
    return (
        <div className={ classes.content }>
            <div className={ classes.top }>
                <img src="http://alp.org.ua/wp-content/uploads/2012/07/artleo.com_21593.jpg" alt="top"/>
            </div>

            <div className={ classes.user }>
                <div className={ classes.avatar }>
                    <img src="https://static-2.gumroad.com/res/gumroad/files/6491692161652/bc68011bbe4b4d53b43e03ac39487f17/original/avatar-1295404_960_720.png" alt=""/>
                </div>
                <div className={ classes.description }>
                    <p>description</p>
                </div>
            </div>

            <Posts />
        </div>
    );
}

export default Profile;