import React from "react";
import classes from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let DialogsItems = props.state.DialogsData.map( (dialog) => <Dialog name={ dialog.name } id={dialog.id} /> );
    let MessagesItems = props.state.MessagesData.map( (message) => <Message text={ message.text } id={message.id} /> );

    return (
        <div className={ classes.dialogs }>
            <div className={ classes.dialog_items }>
                { DialogsItems }
            </div>

            <div className={ classes.messages }>
                { MessagesItems }
            </div>
        </div>
    );
}

export default Dialogs;