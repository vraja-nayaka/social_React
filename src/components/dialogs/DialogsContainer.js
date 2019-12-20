import React from 'react'
import { sendMessage } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import Messages from './Messages'
import { connect } from 'react-redux'
//import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

class DialogsContainer extends React.Component {
  // refreshDialogs() {
  //     let dialogId = this.props.match.params.dialogId;
  //     if (!dialogId) {
  //         dialogId = this.props.authorizedUserId;
  //         if (!dialogId) {
  //             this.props.history.push("/login");
  //         } else {
  //             this.props.history.push("/profile/" + dialogId);
  //         }
  //     }
  //     this.props.getUserProfile(dialogId);
  //     this.props.getStatus(dialogId);
  // }

  // componentDidMount() {
  //     this.refreshProfile();
  // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //     if (this.props.match.params.dialogId !== prevProps.match.params.dialogId ) {
  //         this.refreshProfile();
  //     }
  // }
  render() {
    console.log(this.props)
    let dialogId = this.props.match.params.dialogId
    return !dialogId ? <Dialogs {...this.props} /> : <Messages messages={this.props.dialogsPage.messages} sendMessage={this.props.sendMessage} />
  }
}

const mapStateToProps = ({ dialogsPage }) => ({
  dialogsPage: dialogsPage
})

export default compose(
  connect(
    mapStateToProps,
    { sendMessage }
  ),
  withRouter
)(DialogsContainer)
