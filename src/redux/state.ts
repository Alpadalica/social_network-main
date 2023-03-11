export type MessageType = {
    id: number
    message: string
    sender: boolean
}

export type DialogType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    newPostText: string
    posts: Array<PostType>
}

export type DialogPageType = {
    newMessageText: string
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}

export type StoreType = {
    _state: RootStateType
    subscribe: (observer: () => void) => void
    _callSubscriber: () => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}

type AddPostActionType = {
    type: 'ADD-POST'
    postText: string
}

type ChangeNewTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

type AddMessageActionType = {
    type: 'ADD-MESSAGE'
    messageText: string
}

type UpdateMessageTextType = {
    type: 'UPDATE-MESSAGE-TEXT'
    newText: string
}

export type ActionsType = AddPostActionType | ChangeNewTextActionType | AddMessageActionType | UpdateMessageTextType

export const addPostAC = (postText: string): AddPostActionType => {
    return {
        type: "ADD-POST",
        postText: postText
    }
}
export const changeNewTextAC = (newText: string): ChangeNewTextActionType => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    }
}

export const addMessageAC = (messageText: string): AddMessageActionType => {
    return {
        type: "ADD-MESSAGE",
        messageText: messageText
    }
}
export const updateMessageAC = (newText: string): UpdateMessageTextType => {
    return {
        type: "UPDATE-MESSAGE-TEXT",
        newText: newText
    }
}

export const store: StoreType = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {id: 1, message: 'привет я здесь', likesCount: 13},
                {id: 2, message: 'привет я здесь', likesCount: 12},
                {id: 3, message: 'привет я здесь', likesCount: 12},
            ],
        },
        dialogsPage: {
            newMessageText: '',
            dialogs: [
                {id: 1, name: 'Alexander'},
                {id: 2, name: 'Anna'},
                {id: 3, name: 'Sonya'},
                {id: 4, name: 'Kirill'},
                {id: 5, name: 'Roma'},
                {id: 6, name: 'Nadya'},
            ],
            messages: [
                {id: 1, message: 'Hi', sender: true},
                {id: 2, message: 'How is your', sender: false},
                {id: 3, message: 'Yo', sender: true},
                {id: 4, message: 'Yo', sender: false},
                {id: 5, message: 'Yo', sender: true},
                {id: 6, message: 'yo', sender: true},
            ]
        }
    },

    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber()
        }
        if (action.type === 'ADD-MESSAGE') {
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: action.messageText,
                sender: false
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber()
        } else if (action.type === 'UPDATE-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber()
        }
    }
}

export default store;