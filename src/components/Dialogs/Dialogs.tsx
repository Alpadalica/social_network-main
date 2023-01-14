import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogType, MessageType} from '../../redux/state'

type DialogsPropsType = {
    DialogsPropsItem: Array<DialogType>
    MessagePropsItem: Array<MessageType>
}

const Dialogs = (props: DialogsPropsType) => {
    let dialogsElements = props.DialogsPropsItem.map((d) => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.MessagePropsItem.map((m) => <Message message={m.message} id={m.id}/>)
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