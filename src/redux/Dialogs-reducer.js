const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSSAGE';

const DialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.messageText;
            return state;
        case SEND_MESSAGE:
            let messageText = state.newMessageText;
            state.newMessageText = '';
            state.MessagesData.push({id:2, chatId: 1, text: messageText});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE,
})
export const updateNewMessageTextCreator = (messageText) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    messageText: messageText,

})

export default DialogsReducer;