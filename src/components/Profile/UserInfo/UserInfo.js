import classes from "./UserInfo.module.css";
import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/img/user.png";
import UserStatusWithHooks from "./UserStatus/UserStatusWithHooks";

const UserInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={ classes.user_info }>
                <div className={ classes.avatar }>
                    <img src={props.profile.photos.large ? props.profile.photos.large:userPhoto} alt="avatar"/>
                    {props.isOwner && <input type="file" onChange={onMainPhotoSelected} /> }
                </div>

                <div className={classes.user}>
                    <div className={classes.fullName}>
                        <h2>{props.profile.fullName}</h2>
                    </div>
                    {
                        props.isOwner
                            ? <UserStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                            : <div>{props.status}</div>
                    }
                    <div className={ classes.description }>

                        <div className={classes.job}>
                            <p>{props.profile.lookingForAJob ? 'Ищу работу' : 'Не ищу работу' }</p>
                            <i>{props.profile.lookingForAJobDescription}</i>
                        </div>
                        <div className={classes.contacts}>
                            <div className={classes.contactItem}>
                                {props.profile.contacts.facebook
                                    ? <p><a href={props.profile.contacts.facebook}>facebook</a></p>
                                    : null
                                }
                            </div>
                            <div className={classes.contactItem}>
                                {props.profile.contacts.vk
                                    ? <p><a href={props.profile.contacts.vk}>vk</a></p>
                                    : null
                                }
                            </div>
                            <div className={classes.contactItem}>
                                {props.profile.contacts.instagram
                                    ? <p><a href={props.profile.contacts.instagram}>instagram</a></p>
                                    : null
                                }
                            </div>
                            <div className={classes.contactItem}>
                                {props.profile.contacts.github
                                    ? <p><a href={props.profile.contacts.github}>github</a></p>
                                    : null
                                }
                            </div>
                            <div className={classes.contactItem}>
                                {props.profile.contacts.youtube
                                    ? <p><a href={props.profile.contacts.youtube}>youtube</a></p>
                                    : null
                                }
                            </div>
                            <div className={classes.contactItem}>
                                {props.profile.contacts.tweeter
                                    ? <p><a href={props.profile.contacts.tweeter}>tweeter</a></p>
                                    : null
                                }
                            </div>
                        </div>
                        <div className={classes.aboutMe}>
                            {props.profile.aboutMe}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default UserInfo;