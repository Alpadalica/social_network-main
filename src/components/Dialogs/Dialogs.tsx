import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";


let dialogsData = [
    {id: 1, name: 'Alexander'},
    {id: 2, name: 'Anna'},
    {id: 3, name: 'Persik'},
    {id: 4, name: 'Kirill'},
    {id: 5, name: 'Roma'},
    {id: 6, name: 'Nadya'},
]

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
    {id: 6, message: 'yo'},
]




const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].message}/>
                <Message message={messagesData[1].message} id={messagesData[1].message}/>
            </div>
        </div>
    );
};

export default Dialogs;