import React from 'react';
import * as axios from 'axios';
import style from './users.module.css';
import noAvatar from '../../asets/images/noAvatar.jpg';


let Users = (props) => {
    
    return <div className={style.container}>
        <button onClick={ ()=> 
            {
                if (props.users.lenght != 0) {
                    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                       props.setUsers(response.data.items)
                    })
        {/* props.setUsers([
    {
    id: 1, avatarUrl: 'https://pbs.twimg.com/profile_images/893851949849882627/W3MH-3xd_400x400.jpg',
    followed: false, fullName: 'Dmitry', status: 'I am a boss', location: { city: 'Moscov', country: 'Russia' }
},
{
    id: 2, avatarUrl: 'https://pbs.twimg.com/media/Cl5Gor9WMAA8dVI.jpg',
    followed: true, fullName: 'Vadik', status: 'I am a boss too', location: { city: 'Khabarovsk', country: 'Russia' }
},
{
    id: 3, avatarUrl: 'https://pbs.twimg.com/profile_images/893851949849882627/W3MH-3xd_400x400.jpg',
    followed: false, fullName: 'John', status: 'I am a king', location: { city: 'New York', country: 'USA' }
},
{
    id: 4, avatarUrl: 'https://pbs.twimg.com/profile_images/893851949849882627/W3MH-3xd_400x400.jpg',
    followed: false, fullName: 'Rajesh', status: 'I am a yogi', location: { city: 'Vrindavan', country: 'India' }
},
{
    id: 5, avatarUrl: 'https://pbs.twimg.com/profile_images/893851949849882627/W3MH-3xd_400x400.jpg',
    followed: false, fullName: 'Leha', status: 'Good luck', location: { city: 'Ufa', country: 'Russia' }
}
        ]
        ) */}
        }}}>Загрузить юзеров</button>


        {props.users.map(u => <div className={style.users} >
            <img src={u.photos.small != null ? u.photos.small : noAvatar }></img>
            <div>{u.name}</div>
            <div>
                {u.followed
                    ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                    : <button onClick={() => { props.follow(u.id) }}>Follow</button>
                }
            </div>
            {/* <div className={style.location}>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
            </div> */}
            <div>status</div>
        </div>
        )}
    </div>
}

export default Users
