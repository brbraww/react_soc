import React from "react";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/Dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let onSendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (newMessage) => {
        props.store.dispatch(updateNewMessageTextCreator(newMessage));
    }
    return (
        <Dialogs
            DialogPage={props.store.getState().DialogsPage}
            sendMessage={onSendMessage}
            updateNewMessageText={onNewMessageChange}
        />
    );
}

export default DialogsContainer;