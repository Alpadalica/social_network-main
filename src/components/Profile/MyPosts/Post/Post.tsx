import React from 'react';
import s from './Post.module.css';

export type PostType = {
    message: string
    likesCount: string
}

const Post = (props: PostType) => {
    return (
                <div className={s.item}>
                    <img src="https://www.w3schools.com/w3images/avatar6.png"
                         alt='avatar'/>
                    {props.message}
                    <div>
                    <span>{props.likesCount}</span>
                </div>
                </div>
    );
}

export default Post;