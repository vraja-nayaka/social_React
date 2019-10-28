import React from 'react';
import dialogs from './dialogs.module.css';

const Dialog = (props) => {
    //let path = "/dialogs/" + props.Id;
    return <div>
      <a href="#">{props.name}</a>
    </div>
  //<NavLink to={path}>{props.name}</NavLink>  (урок 23)
  }
  const Message = (props) => {
    return <div>
      <a>{props.message}</a>
    </div>
  }
  
  const Dialogs = (props) => {
    let DialogsElements = props.DialogsData.map (dialog => <Dialog name={dialog.name} id={dialog.id}/>);
    let MessagesElements = props.MessagesData.map (message => <Message message={message.message} id={message.id}/>); 
        
    return <div className="dialogs">
      <div className="dialogs_items"> { DialogsElements } </div>
      <div className="messages"> { MessagesElements } </div>
    </div>
  };
  
  export default Dialogs 