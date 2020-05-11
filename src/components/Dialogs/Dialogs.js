import React from "react";
import classes from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/Dialogs-reducer";


const Dialogs = (props) => {

    let state = props.store.getState().DialogsPage;

    let DialogsItems = state.DialogsData.map( (dialog) => <Dialog name={ dialog.name } id={dialog.id} /> );
    let MessagesItems = state.MessagesData.map( (message) => <Message text={ message.text } id={message.id} /> );
    let newMessageText = state.newMessageText;

    let onSendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (event) => {
        let newMessage = event.target.value;
        props.store.dispatch(updateNewMessageTextCreator(newMessage));
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