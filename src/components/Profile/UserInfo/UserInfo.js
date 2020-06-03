import classes from "./UserInfo.module.css";
import React, {useState} from "react";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/img/user.png";
import UserStatusWithHooks from "./UserStatus/UserStatusWithHooks";
import ProfileDescriptionForm from "./ProfileDescriptionForm";

const UserInfo = (props) => {
    let [editMode, setEditMode] = useState(false)
    if (!props.profile) {
        return <Preloader />
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        props.saveUserInfo(formData)
            .then(() => {
                setEditMode(false)
        })
    }

    return (
        <div>
            <div className={ classes.user_info }>
                <div className={ classes.avatar }>
                    <img src={props.profile.photos.large ? props.profile.photos.large:userPhoto} alt="avatar"/>
                    {props.isOwner && <input type="file" onChange={onMainPhotoSelected} /> }
                </div>

                <div className={classes.user}>
                    {props.isOwner
                        ? <UserStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                        : <div>{props.status}</div>}

                    {editMode
                        ? <ProfileDescriptionForm initialValues={props.profile} onSubmit={onSubmit} profile={props.profile} />
                        : <ProfileDescription goToEditMode={() => {setEditMode(true)}} profile={props.profile} isOwner={props.isOwner}/>}
                </div>
            </div>
        </div>

    )
}

const ProfileDescription = (props) => {
    return <div className={ classes.description }>
        {props.isOwner && <div><button onClick={props.goToEditMode}>edit</button></div>}

        <div className={classes.fullName}>
            <h2>{props.profile.fullName}</h2>
        </div>
        <div className={classes.job}>
            <div>
                <p className={classes.title}>{props.profile.lookingForAJob ? 'Ищу работу' : 'Не ищу работу' }</p>
            </div>
            <div>
                <p className={classes.title}>Профессиональные навыки:</p>
                <p>{props.profile.lookingForAJobDescription}</p>
            </div>
        </div>
        <div className={classes.aboutMe}>
            <p className={classes.title}>О себе:</p>
            <p>{props.profile.aboutMe}</p>
        </div>
        <div className={classes.contacts}>
            <p className={classes.title}>Контакты:</p>
            {Object.keys(props.profile.contacts).map(key=>{
            return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
        })}
        </div>
    </div>
}

export const Contact = ({contactTitle, contactValue}) => {
    if (contactValue) {
        return <div className={classes.contactItem}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    } else {
        return ''
    }
}

export default UserInfo;