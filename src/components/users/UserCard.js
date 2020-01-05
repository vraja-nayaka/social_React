import React from 'react'
import noAvatar from '../../asets/images/noAvatar.jpg'
import { NavLink } from 'react-router-dom'
import style from './users.module.css'
import Card from '@material-ui/core/Card'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'

export default function UserCard(props) {
  const { u, unfollow, follow, followingInProgress, isAuth } = props
  const Link = ({ children, ...props }) => {
    return (
      <div>
        <NavLink to={'/profile/' + u.id}>{children}</NavLink>
      </div>
    )
  }
  return (
    <Card className={style.users}>
      <div className={style.userAvatar}>
        <Link>
          <img
            alt="User Avatar"
            src={u.photos.small != null ? u.photos.small : noAvatar}
          />
        </Link>
      </div>
      <Link>
        <IconButton color="primary" size="small">
          {u.name}
        </IconButton>
      </Link>
      {isAuth ? (
        <div>
          {u.followed ? (
            <IconButton
              size="small"
              disabled={followingInProgress.some(id => id === u.id)}
              onClick={() => {
                unfollow(u.id)
              }}
            >
              Unfollow
            </IconButton>
          ) : (
            <IconButton
              variant="contained"
              color="secondary"
              size="small"
              disabled={followingInProgress.some(id => id === u.id)}
              onClick={() => {
                follow(u.id)
              }}
            >
              Follow
            </IconButton>
          )}
        </div>
      ) : null}
      <div>
        <Typography variant="subtitle1" component="div">
          <i> Status: </i> {u.status}
        </Typography>
      </div>
    </Card>
  )
}
