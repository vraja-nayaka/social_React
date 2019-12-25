import React, { useState } from 'react'
import style from './../profile.module.css'
import Preloader from './../../common/preloader/Preloader'
// import vkImg from './../../../asets/images/icon/vk.svg'
// import twitterImg from './../../../asets/images/icon/twitter.svg'
// import facebookImg from './../../../asets/images/icon/facebook.svg'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import userPhoto from './../../../asets/images/noAvatar.jpg'
import ProfileDataForm from './ProfileDataForm'

const ProfileInfo = ({
  savePhoto,
  isOwner,
  profile,
  status,
  saveProfile,
  updateStatus
}) => {
  const [editMode, setEditMode] = useState(false)

  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = e => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  const onSubmit = formData => {
    saveProfile(formData).then(() => {
      setEditMode(false)
    })
  }

  return (
    <div>
      <div className={style.descriptionBlock}>
        {editMode ? (
          <ProfileDataForm
            initialValues={profile}
            profile={profile}
            onSubmit={onSubmit}
          />
        ) : (
          <ProfileData
            goToEditMode={() => {
              setEditMode(true)
            }}
            profile={profile}
            isOwner={isOwner}
            onMainPhotoSelected={onMainPhotoSelected}
          />
        )}
        <ProfileStatusWithHooks
          status={status}
          updateStatus={updateStatus}
          isOwner={isOwner}
        />
      </div>
    </div>
  )
}

const ProfileData = ({
  profile,
  isOwner,
  goToEditMode,
  onMainPhotoSelected
}) => {
  return (
    <div className={style.profile_info}>
      <div>
        {' '}
        <img alt="[no-аватар]" src={profile.photos.large || userPhoto} />
      </div>
      {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>Редактировать</button>
        </div>
      )}
      <div>
        {' '}
        <b>{profile.fullName}</b>
      </div>
      <div>
        {' '}
        <b>Обо мне: </b> {profile.aboutMe}
      </div>
      <div>
        <div>
          {' '}
          {!profile.lookingForAJob ? <b>Не ищу работу</b> : <b>Ищу работу</b>}
        </div>
        <div>
          {' '}
          <b>Профессиональные навыки:</b> {profile.lookingForAJobDescription}
        </div>
      </div>
      <div className={style.icon}>
        {' '}
        <b>Контактные данные:</b>
        {Object.entries(profile.contacts).map(([key, value]) => {
          return (
            value !== '' && (
              <div key={key}>
                <b> {key}: </b>
                <a href="/">{value}</a>
              </div>
            )
          )
        })}
      </div>
    </div>
  )
}
export default ProfileInfo
