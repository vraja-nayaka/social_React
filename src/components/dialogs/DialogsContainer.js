import React from 'react';
import { sendMessageAC, updateNewMessageBodyAC } from '../../redux/dialogs-reducer'
import Dialogs from './dialogs';
import { connect } from "react-redux"

/*const DialogsContainerOld = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState().dialogsPage;

          let onSendMessageClikc = () => {
            store.dispatch(sendMessageAC());
          };

          let onNewMessageChange = (body) => {
            store.dispatch(updateNewMessageBodyAC(body));
          };

          return <Dialogs state={state}
            sendMessage={onSendMessageClikc}
            updateNewMessageBody={onNewMessageChange}
            dialogsPage={state} />
        }
      }
    </StoreContext.Consumer>)
}*/

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
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