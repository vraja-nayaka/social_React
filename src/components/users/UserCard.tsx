import React from 'react'
import noAvatar from '../../asets/images/noAvatar.jpg'
import { NavLink } from 'react-router-dom'
import style from './users.module.css'
import Card from '@material-ui/core/Card'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { UserType } from '../../types'

type UserCardProps = {
  user: UserType,
  unfollow: (userId: number) => void,
  follow: (userId: number) => void,
  followingInProgress: Array<number>,
  isAuth: boolean 
}

  export const UserCard: React.FC<UserCardProps> = ({ user, unfollow, follow, followingInProgress, isAuth }) => {
  
    const Link: React.FC<any> = ({ children }) => {
    return (
      <div>
        <NavLink to={'/profile/' + user.id}>{children}</NavLink>
      </div>
    )
  }

  return (
    <Card className={style.users}>
      <div className={style.userAvatar}>
        <Link>
          <img
            alt="User Avatar"
            src={user.photos.small != null ? user.photos.small : noAvatar}
          />
        </Link>
      </div>
      <Link>
        <IconButton color="primary" size="small">
          {user.name}
        </IconButton>
      </Link>
      {isAuth ? (
        <div>
          {user.followed ? (
            <IconButton
              size="small"
              disabled={followingInProgress.some(id => id === user.id)}
              onClick={() => {
                unfollow(user.id)
              }}
            >
              Unfollow
            </IconButton>
          ) : (
            <IconButton
              color="secondary"
              size="small"
              disabled={followingInProgress.some(id => id === user.id)}
              onClick={() => {
                follow(user.id)
              }}
            >
              Follow
            </IconButton>
          )}
        </div>
      ) : null}
      <div>
        <Typography variant="subtitle1" component="div">
          <i> Status: </i> {user.status}
        </Typography>
      </div>
    </Card>
  )
}
