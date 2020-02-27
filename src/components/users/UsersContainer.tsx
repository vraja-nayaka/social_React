import React from 'react'
import { follow, unfollow, requestUsers } from '../../redux/users-reducer'
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress
} from '../../redux/users-selectors'

import { connect } from 'react-redux'
import Users from './Users'
import Preloader from './../common/preloader/Preloader'
import { UserType } from '../../types'
import { RootState } from '../../redux/redux-store'

type OwnPropsType = {
  pageTitle: string
}

type MapStatePropsType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: Array<number>
  isAuth: boolean
}

type MapDispatchPropsType = {
  follow: (id: number) => void
  unfollow: (id: number) => void
  requestUsers: (currentPage: number, pageSize: number) => void
}

type Props = OwnPropsType & MapStatePropsType & MapDispatchPropsType

class UsersAPIComponent extends React.Component<Props> {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber: number) => {
    this.props.requestUsers(pageNumber, this.props.pageSize)
  }

  render() {
    return (
      <>
        <h2>{this.props.pageTitle}</h2>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          followingInProgress={this.props.followingInProgress}
          isAuth={this.props.isAuth}
        />
      </>
    )
  }
}

let mapStateToProps = (state: RootState) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    isAuth: state.auth.isAuth
  }
}

export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, RootState>(
  mapStateToProps,
  {
    follow,
    unfollow,
    requestUsers
  }
)(UsersAPIComponent)
