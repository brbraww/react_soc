import {sendMessageCreator} from "../../redux/Dialogs-reducer";
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
        sendMessage: (newMessageText) => {
            dispatch(sendMessageCreator(newMessageText));
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);