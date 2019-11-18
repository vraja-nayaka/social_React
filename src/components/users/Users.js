import React from 'react';
import style from './users.module.css';
import noAvatar from '../../asets/images/noAvatar.jpg';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [1];
    let startingPage = props.currentPage === 1 ? 2 : props.currentPage
    for (let i = startingPage; i <= props.currentPage + 4; i++) {
        pages.push(i);
    };
    pages.push(pagesCount);
    return <div>
        <div className={style.container}>
            <div>
                {pages.map(p => {
                    return <span
                        className={props.currentPage === p && style.selectedPage}
                        onClick={(e) => {
                            props.onPageChanged(p);
                        }}> {`${p}..`} </span>
                })
                }
            </div>
            {props.users.map(u => <div className={style.users} >
                <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : noAvatar}></img>
                    <div>{u.name}</div>
                </NavLink>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "49fa5186-c2a7-4366-a43b-a352b3091b8d"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id);
                                    }
                                })
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "49fa5186-c2a7-4366-a43b-a352b3091b8d"
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id);
                                    }
                                })
                        }}>Follow</button>
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
    </div>
}

export default Users
