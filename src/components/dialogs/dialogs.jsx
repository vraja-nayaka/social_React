import React from 'react';
import s from './dialogs.module.css';
import { NavLink } from "react-router-dom";
import { Field, reduxForm } from 'redux-form';
import { required, maxLength30, Textarea } from './../../utils/validators';

const Dialog = (props) => {
  let pathLink = "/dialogs/" + props.id;
  return <div className={s.dialogs_item}>
   <NavLink to={pathLink}>{props.name}</NavLink>
  </div>
};

const Message = (props) => {
  return <div className={s.message_item}>
  <a href="#">{props.message}</a>
  </div>
};


const Dialogs = ({dialogsPage: {dialogs, messages},sendMessage}) => {
  let DialogsElements = dialogs.map(dialog => <Dialog name={dialog.name} key={dialog.id} id={dialog.id} />);
  let MessagesElements = messages.map(({id, message}) => <Message message={message} key={id} id={id} />);
  return <div className={s.wrapper}>
    <div className={s.dialogs_bar}> {DialogsElements} </div>
    <div className={s.messages}> {MessagesElements}
      <AddMessageReduxForm onSubmit={({newMessage}) => sendMessage(newMessage)} />
    </div>
  </div>
};

const AddMessageForm = ({handleSubmit}) => {
  return <form
    className={s.new_message_line}
    onSubmit={handleSubmit}
  >
    <Field placeholder="Введите Ваше сообщение"
      component={Textarea}
      validate={[required, maxLength30]}
      name="newMessage" type="text"
    >
    </Field>
    <button type="submit">Опубликовать</button>
  </form>
};

const AddMessageReduxForm = reduxForm({
  form: 'newMessage'
})(AddMessageForm);

export default Dialogs 