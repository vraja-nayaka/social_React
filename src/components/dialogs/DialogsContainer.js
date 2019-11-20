import React from 'react';
import { sendMessageAC, updateNewMessageBodyAC } from '../../redux/dialogs-reducer'
import Dialogs from './dialogs';
import { connect } from "react-redux"
import { withAuthRedirect } from './../../hoc/withAuthRedirect';


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);

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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export default DialogsContainer 