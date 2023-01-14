export type MessageType = {
    id: number
    message: string
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
    posts: Array<PostType>
}

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}


export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 2, message: 'привет я здесь', likesCount: 13},
            {id: 1, message: 'привет я здесь', likesCount: 12},
        ]
    },
    dialogsPage: {
    dialogs: [
        {id: 1, name: 'Alexander'},
        {id: 2, name: 'Anna'},
        {id: 3, name: 'Sonya'},
        {id: 4, name: 'Kirill'},
        {id: 5, name: 'Roma'},
        {id: 6, name: 'Nadya'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'yo'},
    ]
    }
}