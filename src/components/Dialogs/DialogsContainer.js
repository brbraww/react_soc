import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/Dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        DialogsPage: state.DialogsPage,
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
let AuthRedirectComponent = withAuthRedirect(Dialogs)


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;