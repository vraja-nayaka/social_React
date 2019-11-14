import React from 'react';
import style from './users.module.css';


let Users = (props) => {
    return <div className={style.container}>
        {props.users.map(u => <div className={style.users} >            <img src={u.avatarUrl}></img>
            <div>{u.fullName}</div>
            <div>
                {u.followed
                    ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                    : <button onClick={() => { props.follow(u.id) }}>Follow</button>
                }
            </div>
            <div className={style.location}>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
            </div>
            <div>{u.status}</div>
        </div>
        )}
    </div>
}

export default Users
