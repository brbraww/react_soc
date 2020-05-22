import React from "react";
import classes from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLenghtCreator, requiredField} from "../../utils/validators/validators";


const Dialogs = (props) => {
    let DialogsItems = props.DialogsPage.DialogsData.map( (dialog) => <Dialog name={ dialog.name } id={dialog.id} /> );
    let MessagesItems = props.DialogsPage.MessagesData.map( (message) => <Message text={ message.text } id={message.id} /> );

    let addNewMessage = (value) => {
        props.sendMessage(value.newMessageText);
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

                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}
const maxLenght20 = maxLenghtCreator(20)
const AddMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name={'newMessageText'}
                    placeholder={'Enter your message'}
                    validate={[requiredField, maxLenght20]}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;