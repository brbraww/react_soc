import React from "react";
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <div className={ classes.dialog + ' ' + classes.active }>
            <NavLink  to={"/dialogs/"+ props.id }>
                { props.name }
            </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={ classes.message }>
            { props.text }
        </div>
    )
}

const Dialogs = (props) => {
    let DialogsData = [
        {id: 1, name: 'Amidomaru'},
        {id: 2, name: 'Yo'},
        {id: 3, name: 'Riko'},
        {id: 4, name: 'Moon'},
        {id: 5, name: 'Ogurchik'},
    ]
    let MessagesData = [
        {id: 1, text: 'Ya Amidomaru'},
        {id: 2, text: 'Yo Yo'},
        {id: 3, text: 'Ya Riko'},
        {id: 4, text: 'Ya Moon'},
        {id: 5, text: 'Ya Ogurchik'},

    ]
    let DialogsItems = DialogsData.map( (dialog) => <Dialog name={ dialog.name } id={dialog.id} /> );
    let MessagesItems = MessagesData.map( (message) => <Message text={ message.text } id={message.id} /> );

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