import React from 'react';
import s from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <div>
                my post
            <div>
                <textarea></textarea>
                <button>Add Post</button>
                <button>Remove</button>
            </div>
            <div>
                new post
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    post1
                </div>
                <div className={s.item}>
                    post2
                </div>
            </div>
        </div>
    );
}

export default MyPosts;