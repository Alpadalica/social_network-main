import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div className={s.PostsBlock}>
            <h3>my post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='привет я здесь' likesCount='4'/>
                <Post message='привет я здесь' likesCount='4'/>
            </div>
        </div>
    )
}

export default MyPosts;