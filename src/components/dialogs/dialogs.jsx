import React from 'react';
import dialogs from './dialogs.module.css';
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
  let pathLink = "/dialogs/" + props.id;
  return <div><NavLink to={pathLink}>{props.name}</NavLink></div>
};

const Message = (props) => {
  return <div><a>{props.message}</a></div>
};

const Dialogs = (props) => {
  let DialogsElements = props.dialogsPage.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id} />);
  let MessagesElements = props.dialogsPage.messages.map(message => <Message message={message.message} id={message.id} />);
debugger
let onNewMessageChange = (e) => {
  let body = e.target.value;
  props.updateNewMessageBody(body);
}
  return <div className="dialogs">
    <div className="dialogs_items"> {DialogsElements} </div>
    <div className="messages"> {MessagesElements}
      <textarea placeholder='Введите Ваше сообщение' 
      onChange={onNewMessageChange} 
      value={props.state.newMessageBody}></textarea>
      <button
        onClick={props.sendMessage}>Опубликовать</button>
    </div>
  </div>
};

export default Dialogs 