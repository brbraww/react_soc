import classes from "../UserInfo.module.css";
import React, {useEffect, useState} from "react";

const UserStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])


    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            { !editMode &&
            <div className={classes.status}>
                <span onDoubleClick={activateEditMode}>{props.status || '-------'}</span>
            </div>
            }
            { editMode &&
            <div>
                <input onChange={onStatusChange} value={status} autoFocus={true} onBlur={deactivateEditMode} type="text"/>
            </div>
            }
        </div>
    )

}


export default UserStatusWithHooks;