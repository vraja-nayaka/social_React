import React from 'react';
import { sendMessageAC, updateNewMessageBodyAC } from '../../redux/dialogs-reducer'
import Dialogs from './dialogs';
import { connect } from "react-redux"
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageAC());
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyAC(body));
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)