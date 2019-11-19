import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as axios from 'axios';
import { addPost, updateNewPostText, getUserProfile } from '../../redux/profile-reducer'
import { usersAPI } from './../../api/api';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) { userId = 2 };
        this.props.getUserProfile(userId)
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps,
    { addPost, updateNewPostText, getUserProfile })(withUrlDataContainerComponent)