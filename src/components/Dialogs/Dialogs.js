import React from "react";
import classes from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {
    let DialogsItems = props.DialogsPage.DialogsData.map( (dialog) => <Dialog name={ dialog.name } id={dialog.id} /> );
    let MessagesItems = props.DialogsPage.MessagesData.map( (message) => <Message text={ message.text } id={message.id} /> );
    let newMessageText = props.DialogsPage.newMessageText;

    let onSendMessage = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (event) => {
        let newMessage = event.target.value;
        props.updateNewMessageText(newMessage);
    }

    if (!props.isAuth) {
        return <Redirect to="/login" />
    }

    return (
        <div className={ classes.dialogs }>
            <div className={ classes.dialog_items }>
                { DialogsItems }
            </div>

            <div className={ classes.messages }>
                <div>
                    { MessagesItems }
                </div>
                <div>
                    <div>
                        <textarea onChange={onNewMessageChange}
                                  value={newMessageText}
                                  placeholder='Enter new message'/>
                    </div>
                    <div>
                        <button onClick={onSendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;