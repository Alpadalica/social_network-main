import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {DialogPageType, PostType, updateNewPostText} from "../../../redux/state";

export type PropsPostsType = {
    PropsPostsType: Array<PostType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

const MyPosts = (props: PropsPostsType) => {
    const postsElements =
        props.PropsPostsType.map
        ((p) => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    const addPost = () => {
        props.addPost()
    }

    const updateNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={s.PostsBlock}>
            <h3>my post</h3>
            <div>
                <div>
                    <textarea
                        placeholder='Write something...'
                        onChange={updateNewPostText}
                        value={props.newPostText}/>
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