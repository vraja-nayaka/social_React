import React from 'react';
import { addPostAC, updateNewPostTextAC } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';
import {connect} from "react-redux";

/*
const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let onAddPost = () => {
                        store.dispatch(addPostAC());
                    };
                    let onPostChange = (text) => {
                        let action = updateNewPostTextAC(text);
                        store.dispatch(action);
                    };
                    return <MyPosts updateNewPostText={onPostChange}
                        addPost={onAddPost}
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText} />
                }
            }
        </StoreContext.Consumer>)
}
*/
let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextAC(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostAC());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer 