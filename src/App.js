import React from "react";
import ProfileContainer from "./components/profile/ProfileContainer";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import { Route, withRouter } from "react-router-dom";
import NavbarConteiner from "./components/navbar/navbar";
import UsersContainer from "./components/users/UsersContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import LoginPage from "./components/login/Login";
import { initializeApp } from "./redux/app-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from './components/common/preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
 //   if (!this.props.initialized) {
 //     return <Preloader/>;
 //   } 
    return (
      <div className="grid">
        <HeaderContainer />
        <NavbarConteiner />
        <div className="content">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <LoginPage />} />
        </div>
      </div>
    );
    }
  }

const mapStateToProps = state => ({
  initialized: state.app.initialized
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { initializeApp }
  )
)(App);
