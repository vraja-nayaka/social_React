import React from 'react';
import profile from './profile.module.css';

const ProfileInfo = () => <div className="profile_info">
    <img src="https://www.aebc.com/wp-content/uploads/2018/11/british-columbia.png" />
</div>;


const Post = (props) => {
    return <div>
        <a href="#">{props.post}</a>
        {props.likesCount} likes
  </div>
};


const MyPosts = (props) => {
    let PostsElements = props.PostsData.map(post => <Post post={post.post} likesCount={post.likesCount} />);
    return <div >
        <div className="my_posts"> {PostsElements} </div>
    </div>
};


const Profile = (props) => {
    return <div className="profile">
        <ProfileInfo />
        <MyPosts PostsData={props.PostsData} />
    </div>
};

export default Profile 