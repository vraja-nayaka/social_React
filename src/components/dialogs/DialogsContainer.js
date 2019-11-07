import React from 'react';
import { sendMessageAC, updateNewMessageBodyAC } from '../../redux/dialogs-reducer'
import Dialogs from './dialogs';

const DialogsContainer = (props) => {
  
  let state = props.store.getState().dialogPage;
  
 let onSendMessageClikc = (text) => {
    props.store.dispatch(sendMessageAC(text));
  };
  
  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyAC(body));
  };
  
  return <Dialogs state={state} sendMessage={onSendMessageClikc} updateNewMessageBody={onNewMessageChange} dialogPage={state}/> 
};

export default DialogsContainer 