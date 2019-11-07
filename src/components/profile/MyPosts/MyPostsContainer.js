import React from 'react';
import { addPostAC, updateNewPostTextAC } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
  let state = props.store.getState();
    let onAddPost = () => {
        props.store.dispatch(addPostAC());
    };
    let onPostChange = (text) => {
        let action = updateNewPostTextAC(text);
        props.store.dispatch(action);
    };
    return <MyPosts updateNewPostText={onPostChange} addPost={onAddPost} posts={props.posts} newPostText={state.profilePage.newPostText}/>
};

export default MyPostsContainer 