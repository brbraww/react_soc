import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/Dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        DialogsPage: state.DialogsPage,
        isAuth: state.auth.isAuth,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (newMessage) => {
            dispatch(updateNewMessageTextCreator(newMessage));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;