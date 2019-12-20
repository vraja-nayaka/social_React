import React from 'react';
import {
  follow, unfollow, requestUsers,
  setCurrentPage, 
  toggleFollowingInProgress
} from '../../redux/users-reducer'
import {
    getUsers,
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress
} from '../../redux/users-selectors'

import { connect } from "react-redux";
import Users from './Users';
import Preloader from './../common/preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';



class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.requestUsers(pageNumber, this.props.pageSize);
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        requestUsers={this.props.requestUsers}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        followingInProgress={this.props.followingInProgress}
      />
    </>
  }
}


let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default compose(
  connect(mapStateToProps,
    {
      follow, unfollow, 
      setCurrentPage, toggleFollowingInProgress, requestUsers
    }
  )
)(UsersAPIComponent)