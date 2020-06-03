import classes from "./UserInfo.module.css";
import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import {requiredField} from "../../../utils/validators/validators";



const ProfileDescriptionForm = (props) => {
    return <form className={ classes.descriptionForm } onSubmit={props.handleSubmit}>
        <div><button onClick={() => {}}>save</button></div>

        {props.error && <div className={classes.error}>{props.error}</div>}

        <div className={classes.fullName}>
            <p className={classes.title}>Полное имя</p> {createField(Input, 'fullName', 'Full name', 'text', [requiredField] )}
        </div>
        <div className={classes.job}>
            <div>
                <p className={classes.title}>Поиск работы: </p>
                {createField(Input, 'lookingForAJob', '', 'checkbox', [] )}
            </div>
            <div>
                <p className={classes.title}>Профессиональные навыки: </p>
                {createField(Textarea, 'lookingForAJobDescription', 'Профессиональные навыки', 'text', [] )}
            </div>

        </div>
        <div className={classes.aboutMe}>
            <p className={classes.title}>О себе:</p>
            {createField(Textarea, 'aboutMe', 'О себе', 'text', [] )}
        </div>
        <div className={classes.contacts}>
            <p className={classes.title}>Контакты:</p> {Object.keys(props.profile.contacts).map(key=>{
            return <div key={key} className={classes.contactItem}>
                <p className={classes.title}>{key}:</p> {createField(Input, 'contacts.' + key, key, 'text', [] )}
            </div>
        })}
        </div>
    </form>
}

const ProfileDescriptionReduxForm = reduxForm({form:'edit-profile'})(ProfileDescriptionForm)

export default ProfileDescriptionReduxForm;