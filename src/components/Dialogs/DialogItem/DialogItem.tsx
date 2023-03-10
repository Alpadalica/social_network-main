import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../redux/state";




const DialogItem = (props: DialogType) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={'/dialogs/1' + props.id}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;