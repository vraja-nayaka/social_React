import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  getStatus,
  getUserProfile,
  savePhoto,
  saveProfile,
  updateStatus
} from '../../redux/profile-reducer'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.authorizedUserId
      if (!userId) {
        this.props.history.push('/login')
      } else {
        this.props.history.push('/profile/' + userId)
      }
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }

  render() {
const {
  savePhoto, profile, status, saveProfile, updateStatus
} = this.props
    return (
      <Profile
        savePhoto={savePhoto}
        isOwner={Number(this.props.match.params.userId) === this.props.authorizedUserId}
        profile={profile}
        status={status}
        saveProfile={saveProfile}
        updateStatus={updateStatus}
      />
    )
  }
}


let mapStateToProps = state => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})

export default compose(
  connect(
    mapStateToProps,
    { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }
  ),
  withRouter
)(ProfileContainer)
