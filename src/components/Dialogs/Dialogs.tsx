import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsType, addMessageAC, DialogType, MessageType, updateMessageAC} from '../../redux/state'

type DialogsPropsType = {
    DialogsPropsItem: Array<DialogType>
    MessagePropsItem: Array<MessageType>
    newMessageText: string
    dispatch: (action: ActionsType) => void
}

const Dialogs = (props: DialogsPropsType) => {
    let dialogsElements = props.DialogsPropsItem.map((d) => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.MessagePropsItem.map((m) => <Message message={m.message} id={m.id} sender={m.sender}/>)

    const addMessage = () => {
        props.dispatch(addMessageAC(props.newMessageText))
    }

    const updateNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateMessageAC(e.currentTarget.value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <button onClick={addMessage}>Send Message</button>
                    <textarea onChange={updateNewMessageText} value={props.newMessageText} />
                </div>
            </div>
        </div>
    );
};

export default Dialogs;