import React from "react";
import { Route, withRouter } from "react-router-dom";
import NavbarConteiner from "./components/navbar/navbar";
import HeaderContainer from "./components/header/HeaderContainer";
import LoginPage from "./components/login/Login";
import { initializeApp } from "./redux/app-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from "./components/common/preloader/Preloader";
import { withSuspense } from "./hoc/withSuspense";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "./ProTip";

const ProfileContainer = React.lazy(() =>
  import("./components/profile/ProfileContainer")
);
const DialogsContainer = React.lazy(() =>
  import("./components/dialogs/DialogsContainer")
);
const UsersContainer = React.lazy(() =>
  import("./components/users/UsersContainer")
);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    // if (!this.props.initialized) {
    //   return <Preloader />;
    // }
    return (
      <div >
        <Container maxWidth="sm">
          <HeaderContainer />
          <NavbarConteiner />
          <div className="content">
            <Route
              path="/profile/:userId?"
              render={withSuspense(ProfileContainer)}
            />
            <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
            <Route path="/users" render={withSuspense(UsersContainer)} />
            <Route path="/login" render={() => <LoginPage />} />
          </div>
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Material UI - подключен
            </Typography>
            <ProTip />
          </Box>
        </Container>
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
