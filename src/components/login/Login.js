import React from 'react'

import { Field, reduxForm } from 'redux-form'
import { Input, renderCheckbox, required } from './../../utils/validators'
import { login } from './../../redux/auth-reducer'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
      }
}))

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="email"
          type="text"
          label="Email address"
          component={Input}
          placeholder={'Enter your email'}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          name="password"
          type="password"
          label="Password"
          component={Input}
          placeholder={'Enter your pass'}
          validate={[required]}
        />
      </div>
      <div>
        <Field name="rememberMe" component={renderCheckbox} type={'сheckbox'} />{' '}
        remember me
      </div>
      <div>
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </div>
      {captchaUrl && <img alt="captha" src={captchaUrl} />}
      {captchaUrl && (
        <Field
          name="captcha"
          label="You made too many attempts"
          type="text"
          component={Input}
          placeholder={'Enter simbols from image'}
          validate={[required]}
        />
      )}
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = props => {
  const classes = useStyles()

  let onSubmit = data => {
    props.login(data)
  }
  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }
  return (
    <Paper className={classes.root}>
      <Typography variant="h5" noWrap>
        SamuraiJS
      </Typography>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </Paper>
  )
}

let mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl
})

export default connect(
  mapStateToProps,
  { login }
)(Login)
