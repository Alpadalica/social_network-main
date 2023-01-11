import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Alexander' id='1'/>
                <DialogItem name='Anna' id='2'/>
                <DialogItem name='Persik' id='3'/>
                <DialogItem name='Kirill' id='4'/>
                <DialogItem name='Roma' id='5'/>
                <DialogItem name='Nadya' id='6'/>
            </div>
            <div className={s.messages}>
                <Message id='1' message='gw'/>
                <Message id='2' message=''/>
                <Message id='3' message=''/>
            </div>
        </div>
    );
};

export default Dialogs;