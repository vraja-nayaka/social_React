import React from 'react';
import s from './dialogs.module.css';
import { NavLink } from "react-router-dom";
import { Field, reduxForm } from 'redux-form';

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

  return <div className={s.wrapper}>
    <div className={s.dialogs_bar}> {DialogsElements} </div>
    <div className={s.messages}> {MessagesElements}
      <AddMessageReduxForm onSubmit={values => props.sendMessage(values.newMessage)} />
    </div>
  </div>
};

const AddMessageForm = (props) => {
  return <form
    className={s.new_message_line}
    onSubmit={props.handleSubmit}
  >
    <Field placeholder="Введите Ваше сообщение"
      name="newMessage" component="input" type="text">
    </Field>
    <button type="submit">Опубликовать</button>
  </form>
};

const AddMessageReduxForm = reduxForm({
  form: 'newMessage'
})(AddMessageForm);

export default Dialogs 