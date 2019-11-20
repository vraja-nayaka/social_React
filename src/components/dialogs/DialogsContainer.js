import React from 'react';
import { sendMessageAC, updateNewMessageBodyAC } from '../../redux/dialogs-reducer'
import Dialogs from './dialogs';
import { connect } from "react-redux"


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer 