import React from "react";
import classes from './Profile.module.css'
import UserInfo from "./UserInfo/UserInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {

    return (
        <div className={ classes.content }>
            <UserInfo
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                savePhoto={props.savePhoto}
            />

            <PostsContainer
                store={props.store}
            />
        </div>
    );
}

export default Profile;