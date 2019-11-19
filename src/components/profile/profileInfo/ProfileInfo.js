import React from 'react';
import style from './../profile.module.css';
import Preloader from './../../common/preloader/Preloader'
import Vk from './../../../asets/images/icon/vk.svg'
import Twitter from './../../../asets/images/icon/twitter.svg'
import Facebook from './../../../asets/images/icon/facebook.svg'


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return <div className={style.profile_info}>
        <img src="https://www.wallpapers.net/web/wallpapers/thailands-most-charming-seaside-resort-town-hd-wallpaper/thumbnail/lg.jpg" />
        <div> <img src={props.profile.photos.large} /></div>
        <div> {props.profile.fullName}</div>
        <div> {`Обо мне: ${(!props.profile.aboutMe) ? '' : props.profile.aboutMe}`}</div>
        <div>
            <div> {(!props.profile.lookingForAJob) ? 'Не ищу работу' : 'Ищу работу'}</div>
            <div> {props.profile.lookingForAJobDescription}</div>
        </div>
        <div className={style.icon}> Контактные данные:
        <div><a href={props.profile.contacts.facebook}> <img src={Facebook} />{props.profile.contacts.facebook}</a></div>
            <div><a href={props.profile.contacts.vk}> <img src={Vk} />{props.profile.contacts.vk}</a></div>
            <div><a href={props.profile.contacts.twitter}> <img src={Twitter} />{props.profile.contacts.twitter}</a></div>
        </div>
    </div >;
}
export default ProfileInfo 