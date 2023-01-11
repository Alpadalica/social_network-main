import React from 'react';
import s from "../Dialogs.module.css";

export type MessageType = {
    id: string
    message: string
}



const Message = (props: MessageType) => {
    return (
        <div>
            <div className={s.message}>{props.message}</div>
        </div>
    );
};

export default Message;