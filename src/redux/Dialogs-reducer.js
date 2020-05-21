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
}

const DialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let message = {
                id: 2,
                chatId: 1,
                text: action.newMessageText,
            };
            return {
                ...state,
                MessagesData: [...state.MessagesData, message],
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageText) => ({
    type: SEND_MESSAGE,
    newMessageText,
})

export default DialogsReducer;