import React from 'react';
import { sendMessageAC, updateNewMessageBodyAC } from '../../redux/dialogs-reducer'
import Dialogs from './dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {
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
}


export default DialogsContainer 