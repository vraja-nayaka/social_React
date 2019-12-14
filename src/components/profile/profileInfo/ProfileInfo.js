import React, { useState } from 'react';
import style from './../profile.module.css';
import Preloader from './../../common/preloader/Preloader';
import Vk from './../../../asets/images/icon/vk.svg';
import Twitter from './../../../asets/images/icon/twitter.svg';
import Facebook from './../../../asets/images/icon/facebook.svg';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from './../../../asets/images/noAvatar.jpg';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <div>
            <div className={style.descriptionBlock}>
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                    : <ProfileData
                        goToEditMode={() => { setEditMode(true) }}
                        profile={profile} isOwner={isOwner}
                        onMainPhotoSelected={onMainPhotoSelected} />
                }
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )

}

const ProfileData = ({ profile, isOwner, goToEditMode, onMainPhotoSelected }) => {
    return (
        <div className={style.profile_info}>
            <div> <img alt="[no-аватар]" src={profile.photos.large || userPhoto} />
            </div>
            {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
            {isOwner && <div><button onClick={goToEditMode}>Редактировать</button></div>}
            <div> {profile.fullName}</div>
            <div> {`Обо мне: ${(!profile.aboutMe) ? '' : profile.aboutMe}`}</div>
            <div>
                <div> {(!profile.lookingForAJob) ? 'Не ищу работу' : 'Ищу работу'}</div>
                <div> {profile.lookingForAJobDescription}</div>
            </div>
            <div className={style.icon}> Контактные данные:
        <div><a href={profile.contacts.facebook}> <img alt="FacebookIcon" src={Facebook} />{profile.contacts.facebook}</a></div>
                <div><a href={profile.contacts.vk}> <img alt="VkIcon" src={Vk} />{profile.contacts.vk}</a></div>
                <div><a href={profile.contacts.twitter}> <img alt="TwitterIcon" src={Twitter} />{profile.contacts.twitter}</a></div>
            </div>
        </div >
    )
}
export default ProfileInfo 