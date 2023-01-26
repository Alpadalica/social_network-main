import React from 'react';
import s from './Profile.module.css';
import MyPosts, {PropsPostsType} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType, updateNewPostText} from "../../redux/state";

type ProfilePropsType = {
    MyPostsPropsType: Array<PostType>
    addPost: () => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}



const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts PropsPostsType={props.MyPostsPropsType}
                     addPost={props.addPost}
                     updateNewPostText={updateNewPostText}
                     newPostText={props.newPostText}
            />
        </div>
    );
};

export default Profile;