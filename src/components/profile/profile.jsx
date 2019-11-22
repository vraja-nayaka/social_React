import React from 'react';
import style from './profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './profileInfo/ProfileInfo';



const Profile = (props) => {
    return <div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer/>
    </div>
};

export default Profile 