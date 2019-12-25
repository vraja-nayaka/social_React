import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './profileInfo/ProfileInfo'

const Profile = ({
  savePhoto,
  isOwner,
  profile,
  status,
  saveProfile,
  updateStatus
}) => {
  return (
    <div>
      <ProfileInfo
        savePhoto={savePhoto}
        isOwner={isOwner}
        profile={profile}
        status={status}
        saveProfile={saveProfile}
        updateStatus={updateStatus}
      />
      <MyPostsContainer />
    </div>
  )
}

export default Profile
