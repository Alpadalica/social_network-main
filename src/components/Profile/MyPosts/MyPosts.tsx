import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            my post
            <div>
                <textarea></textarea>
                <button>Add Post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post message='привет я здесь' likesCount='4'/>
                <Post message='привет я здесь' likesCount='4'/>
            </div>
        </div>
    )
}

export default MyPosts;