import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import NavbarConteiner from './components/navbar/navbar'
import HeaderContainer from './components/header/HeaderContainer'
import LoginPage from './components/login/Login'
import { initializeApp } from './redux/app-reducer'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Preloader from './components/common/preloader/Preloader'
import { withSuspense } from './hoc/withSuspense'

import Container from '@material-ui/core/Container'

const ProfileContainer = React.lazy(() =>
  import('./components/profile/ProfileContainer')
)
const DialogsContainer = React.lazy(() =>
  import('./components/dialogs/DialogsContainer')
)
const UsersContainer = React.lazy(() =>
  import('./components/users/UsersContainer')
)
const WellcomePage = React.lazy(() =>
  import('./components/wellcome/WellcomePage')
)
// const TodoPage = React.lazy(() =>
//   import('./components/todo/components/App')
// )
const TodoPage = React.lazy(() =>
  import('./components/todo/Todo')
)
// const Music = React.lazy(() => import('./components/music/Music'))

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
       if (!this.props.initialized) {
         return <Preloader />;
       }
    return (
      <Container fixed maxWidth="md">
        <div style={{ paddingBottom: 55 }}>
          <HeaderContainer />
          <NavbarConteiner />
          {this.props.initialized ? null : <div>initializing...</div>}
          <div className="content">
          <Route
              path="/"
              exact
              render={withSuspense(WellcomePage)}
            />
            <Route
              path="/profile/:userId?"
              render={withSuspense(ProfileContainer)}
            />
            <Route
              path="/todo"
              render={withSuspense(TodoPage)}
            />
            <Route
              path="/dialogs/:dialogId?"
              render={withSuspense(DialogsContainer)}
            />
            <Route path="/users" render={withSuspense(UsersContainer)} />
            <Route path="/login" render={() => <LoginPage />} />
          </div>
        </div>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { initializeApp }
  )
)(App)


