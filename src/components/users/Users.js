import React, { useState } from 'react'
import style from './users.module.css'
import noAvatar from '../../asets/images/noAvatar.jpg'
import { NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const Pagenation = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  const [pagesList, setPagesList] = useState(1)
  let pagesListSize = 15
  let firstPageOfList = (pagesList - 1) * pagesListSize + 1
  let lastPageOfList =
    firstPageOfList + pagesListSize < pagesCount
      ? firstPageOfList + pagesListSize
      : pagesCount
  for (let i = firstPageOfList; i <= lastPageOfList; i++) {
    pages.push(i)
  }

  return (
    <div>
      <div className={style.pagesListNavButtons}>
        <div>
          {pagesList > 1 && (
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                setPagesList(pagesList - 1)
              }}
            >
              ««
            </Button>
          )}
        </div>
        <div>
          {lastPageOfList !== pagesCount && (
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                setPagesList(pagesList + 1)
              }}
            >
              »»
            </Button>
          )}
        </div>
      </div>
      <div className={style.pagesListButtons}>
        <PageNumbers {...props} pages={pages} />
      </div>
    </div>
  )
}

const PageNumbers = props => {
  return props.pages.map(p => {
    return (
      <Button
        variant="contained"
        color="primary"
        size="small"
        key={p}
        onClick={e => {
          props.onPageChanged(p)
        }}
      >
        {p}
      </Button>
    )
  })
}

const Users = props => {
  return (
    <div>
      <div className={style.container}>
        <Pagenation {...props} />
        {props.users.map(u => (
          <div className={style.users}>
            <NavLink to={'/profile/' + u.id}>
              <img
                alt="User Avatar"
                src={u.photos.small != null ? u.photos.small : noAvatar}
              />
              <div>{u.name}</div>
            </NavLink>
            <div>
              {u.followed ? (
                <Button
                  variant="contained"
                  color="inherit"
                  size="small"
                  disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => {
                    props.unfollow(u.id)
                  }}
                >
                  Unfollow
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => {
                    props.follow(u.id)
                  }}
                >
                  Follow
                </Button>
              )}
            </div>
            {/* <div className={style.location}>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
            </div> */}
            <div>status</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users
