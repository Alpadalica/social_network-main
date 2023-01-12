import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    let posts = [
        {id: 2, message: 'привет я здесь', likesCount: 13},
        {id: 1, message: 'привет я здесь', likesCount: 12},
    ]
    let postsElements = posts.map((p)=> <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)

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
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;