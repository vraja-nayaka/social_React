import React, { useState } from 'react'
import style from './users.module.css'
import UserCard from './UserCard'

import Button from '@material-ui/core/Button'

const Pagenation = ({
  totalUsersCount,
  pageSize,
  onPageChanged,
  currentPage
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize)
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
        <PageNumbers
          onPageChanged={onPageChanged}
          pages={pages}
          currentPage={currentPage}
        />
      </div>
    </div>
  )
}

const PageNumbers = ({ onPageChanged, pages, currentPage }) => {
  return pages.map(p => {
    const isSelected = p === currentPage ? 'secondary' : ''
    return (
      <Button
        variant="contained"
        color={isSelected}
        size="small"
        key={p}
        onClick={e => {
          onPageChanged(p)
        }}
      >
        {p}
      </Button>
    )
  })
}

const Users = props => {
  const {
    totalUsersCount,
    pageSize,
    currentPage,
    onPageChanged,
    users,
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
    />
        ))}
      </div>
    </div>
  )
}




export default Users
