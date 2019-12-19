import React from 'react';
import { sendMessage } from '../../redux/dialogs-reducer'
import Dialogs from './dialogs';
import { connect } from "react-redux"
//import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';


const mapStateToProps = ({dialogsPage}) => {
  return { dialogsPage }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMassage) => {
      dispatch(sendMessage(newMassage));
    },
  }
}

// const refreshProfile = () => {
//         let userId = this.props.match.params.userId;
//         if (!userId) {
//             userId = this.props.authorizedUserId;
//             if (!userId) {
//                 this.props.history.push("/login");
//             } else { 
//                 this.props.history.push("/profile/" + userId); 
//             }
//         }
//         this.props.getUserProfile(userId);
//         this.props.getStatus(userId);
//     }

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  //withAuthRedirect
)(Dialogs)