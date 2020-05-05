import classes from "./UserInfo.module.css";
import React from "react";

const UserInfo = (props) => {
    return (
        <div>
            <div className={ classes.top }>
                <img src={props.src_img_top} alt=""/>
            </div>
            <div className={ classes.user_info }>
                <div className={ classes.avatar }>
                    <img src={props.src_img_ava} alt="avatar"/>
                </div>
                <div className={ classes.description }>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>

    )
}
export default UserInfo;