import React from 'react';
import s from './dialogs.module.css';
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
  let pathLink = "/dialogs/" + props.id;
  return <div className={s.dialogs_item}><div><NavLink to={pathLink}>{props.name}</NavLink></div></div>
};

const Message = (props) => {
  return <div className={s.message_item}><a>{props.message}</a></div>
};

const Dialogs = (props) => {
  let DialogsElements = props.dialogsPage.dialogs.map(dialog => <Dialog name={dialog.name} key={dialog.id} id={dialog.id} />);
  let MessagesElements = props.dialogsPage.messages.map(message => <Message message={message.message} key={message.id} id={message.id} />);
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }
  debugger
  return <div className={s.wrapper}>
    <div className={s.dialogs_bar}> {DialogsElements} </div>
    <div className={s.messages}> {MessagesElements}
      <div className={s.new_message_line}>
        <textarea placeholder='Введите Ваше сообщение'
          onChange={onNewMessageChange}
          value={props.dialogsPage.newMessageBody}></textarea>
        <button
          onClick={props.sendMessage}>Опубликовать</button>
      </div>
    </div>
  </div>
};

export default Dialogs 