import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionsType, addPostAC, changeNewTextAC, PostType,} from "../../../redux/state";

export type PropsPostsType = {
    PropsPostsType: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}

const MyPosts = (props: PropsPostsType) => {
    const postsElements =
        props.PropsPostsType.map
        ((p) => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    const addPost = () => {
        props.dispatch(addPostAC(props.newPostText))
    }

    const updateNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewTextAC(e.currentTarget.value))
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