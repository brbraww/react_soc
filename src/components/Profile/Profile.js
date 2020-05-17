import React from "react";
import classes from './Profile.module.css'
import UserInfo from "./UserInfo/UserInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {

    return (
        <div className={ classes.content }>
            <UserInfo profile={props.profile} />

            <PostsContainer
                store={props.store}
            />
        </div>
    );
}

export default Profile;