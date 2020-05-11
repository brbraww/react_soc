const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSSAGE';

let initialState = {
    DialogsData: [
        {id: 1, name: 'Amidomaru'},
        {id: 2, name: 'Yo'},
        {id: 3, name: 'Riko'},
        {id: 4, name: 'Moon'},
        {id: 5, name: 'Ogurchik'},
    ],
    MessagesData: [
        {id: 1, chatId: 1, text: 'Ya Amidomaru'},
        {id: 1, chatId: 2, text: 'Yo Yo'},
        {id: 1, chatId: 3, text: 'Ya Riko'},
        {id: 1, chatId: 4, text: 'Ya Moon'},
        {id: 1, chatId: 5, text: 'Ya Ogurchik'},
    ],
    newMessageText: '',
}

const DialogsReducer = (state = initialState, action) => {
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