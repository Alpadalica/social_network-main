import React from 'react';
import s from './Profile.module.css';
import MyPosts, {PropsPostsType} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";

type ProfilePropsType = {
    MyPostsPropsType: Array<PostType>
}



const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts PropsPostsType={props.MyPostsPropsType}/>
        </div>
    );
};

export default Profile;