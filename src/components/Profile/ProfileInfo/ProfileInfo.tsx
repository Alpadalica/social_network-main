import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava +
            </div>
        </div>
    );
};

export default ProfileInfo;