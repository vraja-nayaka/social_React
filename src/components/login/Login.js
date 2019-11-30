import React from 'react';

import { Field, reduxForm } from 'redux-form'
import { Input, required } from './../../utils/validators';
import { login } from './../../redux/auth-reducer';
import { connect } from 'react-redux';

const LoginForm = (props) => {
  return (
  <form onSubmit={props.handleSubmit} > 
      <div>
        <Field name="email" component={Input} placeholder={"email"}
        validate={[required]}/>
      </div>
            <div>
        <Field name="password" component={Input} placeholder={"Password"}
        validate={[required]}/>
      </div>
      <div>
        <Field name="rememberMe" component={Input} type={"checkbox"}
        /> remember me
      </div>
 <div>
        <button>Login</button>
      </div>
</form>
)
  }

  const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
  
const Login = (props) => {
  let onSubmit = (data) => {
    props.login(data)
  }
    return (<>
    <h1>login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
      </>
      )
}
let mapStateToProps = () => {
  return {      }
}
let mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password, rememberMe, captcha) => {
      dispatch(login(email, password, rememberMe, captcha));
    },
  }
}
const LoginWithDispatch = connect(mapStateToProps, mapDispatchToProps)(Login)

export default LoginWithDispatch
// этот логин нужно законектить к стору и диспатчить
