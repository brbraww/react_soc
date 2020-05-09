let rerenderEntireTree = () => {
}

let state = {
    ProfilePage: {
        PostsData: [
            {id: 1, text: 'hello', likesCount: 4},
            {id: 2, text: 'lol kek cheburek', likesCount: 51},
        ],
        NewPostText: 'something',
    },
    DialogsPage: {
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
    },
    sidebar: {
    },
}

export const AddPost = () => {
    let NewPost = {
        id: 3,
        text: state.ProfilePage.NewPostText,
        likesCount: 0,
    }
    state.ProfilePage.PostsData.push(NewPost)
    state.ProfilePage.NewPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
    state.ProfilePage.NewPostText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer   // observer pattern
}

export default state;