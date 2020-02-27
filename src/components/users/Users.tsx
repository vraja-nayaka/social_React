import React, { useState } from 'react'
import style from './users.module.css'
import UserCard from './UserCard'
import { Pagenation } from '../common/pagenation/Pagenation'
import { UserType } from '../../types'


type Props = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  users: Array<UserType>
  onPageChanged: (pageNumber: number) => void
  unfollow: (id: number) => void
  follow: (id: number) => void
  followingInProgress: Array<number>
  isAuth: boolean

}

const Users: React.FC<Props> = props => {
  const {
    totalUsersCount,
    pageSize,
    currentPage,
    users,
    onPageChanged,
    unfollow,
    follow,
    followingInProgress,
    isAuth
  } = props
  return (
    <div>
      <div className={style.container}>
        <Pagenation
          totalUsersCount={totalUsersCount}
          pageSize={pageSize}
          onPageChanged={onPageChanged}
          currentPage={currentPage}
        />
        {users.map(u => (
          <UserCard u={u} unfollow={unfollow}
            follow={follow}
            followingInProgress={followingInProgress}
            isAuth={isAuth}
            key={u.id}
          />
        ))}
      </div>
    </div>
  )
}


export default Users
