import React from 'react';
import style from './profile.module.css';
import { addPostAC, updateNewPostTextAC } from '../../redux/profile-reducer'

const ProfileInfo = () => <div className={style.profile_info}>
    <img src="https://www.wallpapers.net/web/wallpapers/thailands-most-charming-seaside-resort-town-hd-wallpaper/thumbnail/lg.jpg" />
</div>;


const Post = (props) => {
    return <div className={style.post}>
        <img src="https://pbs.twimg.com/profile_images/893851949849882627/W3MH-3xd_400x400.jpg"></img>
        <a href="#">{props.message}</a>
        {props.likesCount} likes
  </div>
};


const MyPosts = (props) => {
    let PostsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostAC());
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        //     let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text}
        let action = updateNewPostTextAC(text);
        props.dispatch(action);
    };
    return <div>
        <h3>My posts</h3>
        <textarea onChange={onPostChange} ref={newPostElement} placeholder='Введите текст поста' value={props.newPostText}></textarea>
        <button onClick={addPost}>Опубликовать</button>
        <div> {PostsElements} </div>
    </div>
};


const Profile = (props) => {
    return <div>
        <ProfileInfo />
        <MyPosts posts={props.profilePage.posts}
            dispatch={props.dispatch}
            newPostText={props.profilePage.newPostText}
        />
    </div>
};

export default Profile 