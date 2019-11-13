import React from 'react';
import style from './profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const ProfileInfo = () => <div className={style.profile_info}>
    <img src="https://www.wallpapers.net/web/wallpapers/thailands-most-charming-seaside-resort-town-hd-wallpaper/thumbnail/lg.jpg" />
</div>;

const Profile = (props) => {
    return <div>
        <ProfileInfo />
        <MyPostsContainer/>
    </div>
};

export default Profile 