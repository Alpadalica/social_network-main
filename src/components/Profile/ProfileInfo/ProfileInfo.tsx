import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://images.unsplash.com/photo-1561731172-9d906d7b13bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2VvcmdpYXxlbnwwfHwwfHw%3D&w=1000&q=80"/>
            </div>
            <div className={s.descriptionBlock}>
                ava +
            </div>
        </div>
    );
};

export default ProfileInfo;