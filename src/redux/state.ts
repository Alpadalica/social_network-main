let rerenderEntireTree = () => {
    console.log('State changed');
}

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


export let state: RootStateType = {
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
        {id: 3, message: 'Yo',sender: true},
        {id: 4, message: 'Yo', sender:false},
        {id: 5, message: 'Yo', sender: true},
        {id: 6, message: 'yo', sender: true},
    ]
    }
}


export const addPost = () => {
    const newPost: PostType = {
        id: new Date().getTime(),
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ''
    rerenderEntireTree()
}
export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree()
}

export const addMessage = () => {
    const newMessage: MessageType = {
        id: new Date().getTime(),
        message: state.dialogsPage.newMessageText,
        sender: false
    }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = ''
    rerenderEntireTree()
}

export const updateNewMessageText = (newText: string) => {
    state.dialogsPage.newMessageText = newText
    rerenderEntireTree()
}

export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer;
}

export default state;