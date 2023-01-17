import React from 'react';
import s from './Profile.module.css';
import MyPosts, {PropsPostsType} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";

type ProfilePropsType = {
    MyPostsPropsType: Array<PostType>
    addPostCallBack: (message: string) => void
}



const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts PropsPostsType={props.MyPostsPropsType} addPostCallBack={props.addPostCallBack}/>
        </div>
    );
};

export default Profile;