import React from "react";
import classes from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let DialogsItems = props.state.DialogsData.map( (dialog) => <Dialog name={ dialog.name } id={dialog.id} /> );
    let MessagesItems = props.state.MessagesData.map( (message) => <Message text={ message.text } id={message.id} /> );

    let textMessageElement = React.createRef();
    let sendMessage = () => {
        let text = textMessageElement.current.value;
        alert(text);
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
                    <textarea ref={textMessageElement} name="" id="" cols="" rows=""></textarea>
                    <button onClick={sendMessage} >Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;