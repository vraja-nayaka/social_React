import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import style from '../../users/users.module.css'

type PagenationProps = {
  totalUsersCount: number
  pageSize: number
  onPageChanged: (pageNumber: number) => void
  currentPage: number
}

export const Pagenation: React.FC<PagenationProps> = ({
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
              color="primary"
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

type PageNumbersProps = {
  onPageChanged: (pageNumber: number) => void
  pages: Array<number>
  currentPage: number
}

const PageNumbers: React.FC<PageNumbersProps> = ({ onPageChanged, pages, currentPage }) => {
  return <>
    {pages.map(p => {
      const isSelected = p === currentPage ? 'secondary' : 'default'
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
    })}
  </>
}