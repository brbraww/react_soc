import React from "react";
import classes from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let DialogsItems = props.DialogPage.DialogsData.map( (dialog) => <Dialog name={ dialog.name } id={dialog.id} /> );
    let MessagesItems = props.DialogPage.MessagesData.map( (message) => <Message text={ message.text } id={message.id} /> );
    let newMessageText = props.DialogPage.newMessageText;

    let onSendMessage = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (event) => {
        let newMessage = event.target.value;
        props.updateNewMessageText(newMessage);
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