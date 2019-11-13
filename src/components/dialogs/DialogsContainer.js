import React from 'react';
import { sendMessageAC, updateNewMessageBodyAC } from '../../redux/dialogs-reducer'
import Dialogs from './dialogs';

const DialogsContainer = (props) => {
  
  let state = props.store.getState().dialogsPage;
  
 let onSendMessageClikc = () => {
    props.store.dispatch(sendMessageAC());
  };

  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyAC(body));
  };
  debugger
  return <Dialogs state={state} 
  sendMessage={onSendMessageClikc} 
  updateNewMessageBody={onNewMessageChange} 
  dialogsPage={state}/> 
};

export default DialogsContainer 