import React from 'react'
import { sendMessage } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import Messages from './Messages'
import { connect } from 'react-redux'
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

function DialogsContainer({dialogsPage: {dialogs, messages}, sendMessage, match}) {
    let dialogId = match.params.dialogId
    return !dialogId 
    ? <Dialogs dialogs={dialogs} /> 
    : <Messages messages={messages} sendMessage={sendMessage} />
  }

const mapStateToProps = ({ dialogsPage }) => ({
  dialogsPage
})

export default compose(
  connect(
    mapStateToProps,
    { sendMessage }
  ),
  withRouter,
  withAuthRedirect
)(DialogsContainer)
