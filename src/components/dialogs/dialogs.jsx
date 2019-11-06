import React from 'react';
import dialogs from './dialogs.module.css';
import { NavLink } from "react-router-dom";
import { sendMessageAC, updateNewMessageBodyAC } from '../../redux/dialogs-reducer'

const Dialog = (props) => {
  let pathLink = "/dialogs/" + props.id;
  return <div><NavLink to={pathLink}>{props.name}</NavLink></div>
};

const Message = (props) => {
  return <div>
    <a>{props.message}</a>
  </div>
};

const Dialogs = (props) => {
  let DialogsElements = props.DialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id} />);
  let MessagesElements = props.MessagesData.map(message => <Message message={message.message} id={message.id} />);
  let onSendMessageClikc = () => {
    props.dispatch(sendMessageAC());
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.dispatch(updateNewMessageBodyAC(body))
  };

  return <div className="dialogs">
    <div className="dialogs_items"> {DialogsElements} </div>
    <div className="messages"> {MessagesElements}
      <textarea placeholder='Введите Ваше сообщение' onChange={onNewMessageChange} value={props.newMessageBody}></textarea>
      <button
        onClick={onSendMessageClikc}>Опубликовать</button>
    </div>
  </div>
};

export default Dialogs 