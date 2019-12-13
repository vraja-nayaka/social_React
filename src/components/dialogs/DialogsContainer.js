import React from 'react';
import { sendMessage } from '../../redux/dialogs-reducer'
import Dialogs from './dialogs';
import { connect } from "react-redux"
//import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = ({dialogsPage}) => {
  return { dialogsPage }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMassage) => {
      dispatch(sendMessage(newMassage));
    },
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  //withAuthRedirect
)(Dialogs)