import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";


let dialogs = [
    {id: 1, name: 'Alexander'},
    {id: 2, name: 'Anna'},
    {id: 3, name: 'Sonya'},
    {id: 4, name: 'Kirill'},
    {id: 5, name: 'Roma'},
    {id: 6, name: 'Nadya'},
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
    {id: 6, message: 'yo'},
]

let dialogsElements = dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);
let messagesElements = messages.map((m) => <Message message={m.message} id={m.id}/>)



const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;