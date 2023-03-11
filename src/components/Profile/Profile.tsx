import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, PostType} from "../../redux/state";

type ProfilePropsType = {
    MyPostsPropsType: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}



const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts PropsPostsType={props.MyPostsPropsType}
                     dispatch={props.dispatch}
                     newPostText={props.newPostText}
            />
        </div>
    );
};

export default Profile;