import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";

export type PropsPostsType = {
    PropsPostsType: Array<PostType>
    addPostCallBack: (message: string) => void
}

const MyPosts = (props: PropsPostsType) => {
    let postsElements =
        props.PropsPostsType.map((p)=> <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPostElement.current) {
            props.addPostCallBack(newPostElement.current.value)
        }
    }
    return (
        <div className={s.PostsBlock}>
            <h3>my post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;