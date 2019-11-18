import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as axios from 'axios';
import { addPost, updateNewPostText, setUserProfile } from '../../redux/profile-reducer'


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) { userId = 2};
        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}
let mapStateToProps = (state) => ({
profile: state.profilePage.profile
});

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps,
    { addPost, updateNewPostText, setUserProfile })(withUrlDataContainerComponent)