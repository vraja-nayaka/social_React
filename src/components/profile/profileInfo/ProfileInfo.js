import React from 'react';
import style from './../profile.module.css';
import Preloader from './../../common/preloader/Preloader'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return <div className={style.profile_info}>
        <img src="https://www.wallpapers.net/web/wallpapers/thailands-most-charming-seaside-resort-town-hd-wallpaper/thumbnail/lg.jpg" />
        <div> <img src={props.profile.photos.large} /></div>

    </div>;
}
export default ProfileInfo 