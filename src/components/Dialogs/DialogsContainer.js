import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/Dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);