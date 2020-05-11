import React from "react";
import classes from './Profile.module.css'
import UserInfo from "./UserInfo/UserInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {

    return (
        <div className={ classes.content }>
            <UserInfo src_img_top="http://alp.org.ua/wp-content/uploads/2012/07/artleo.com_21593.jpg" src_img_ava="https://static-2.gumroad.com/res/gumroad/files/6491692161652/bc68011bbe4b4d53b43e03ac39487f17/original/avatar-1295404_960_720.png" description='some user description' />

            <PostsContainer
                store={props.store}
            />
        </div>
    );
}

export default Profile;