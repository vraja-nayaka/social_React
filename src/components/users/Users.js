import React, { useState } from "react";
import style from "./users.module.css";
import noAvatar from "../../asets/images/noAvatar.jpg";
import { NavLink } from "react-router-dom";

const Pagenation = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  const [pagesList, setPagesList] = useState(1);
  let pagesListSize = 15;
  let firstPageOfList = (pagesList - 1) * pagesListSize + 1;
  let lastPageOfList =
    firstPageOfList + pagesListSize < pagesCount
      ? firstPageOfList + pagesListSize
      : pagesCount;
  for (let i = firstPageOfList; i <= lastPageOfList; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={style.pagesListNavButtons}>
        <div>
          {pagesList > 1 && (
            <button
              onClick={() => {
                setPagesList(pagesList - 1);
              }}
            >
              ««
            </button>
          )}
        </div>
        <div>
          {lastPageOfList !== pagesCount && (
            <button
              onClick={() => {
                setPagesList(pagesList + 1);
              }}
            >
              »»
            </button>
          )}
        </div>
      </div>
      <div className={style.pagesListButtons}>
        <PageNumbers {...props} pages={pages} />
      </div>
    </div>
  );
};

const PageNumbers = props => {
  return props.pages.map(p => {
    return (
      <button
        key={p}
        className={props.currentPage === p && style.selectedPage}
        onClick={e => {
          props.onPageChanged(p);
        }}
      >
        {p}
      </button>
    );
  });
};

const Users = props => {
  return (
    <div>
      <div className={style.container}>
        <Pagenation {...props} />
        {props.users.map(u => (
          <div className={style.users}>
            <NavLink to={"/profile/" + u.id}>
              <img
                alt="User Avatar"
                src={u.photos.small != null ? u.photos.small : noAvatar}
              />
              <div>{u.name}</div>
            </NavLink>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
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
  );
};

export default Users;
