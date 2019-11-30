import React from 'react';

import { Field, reduxForm } from 'redux-form'
import { Input, required } from './../../utils/validators';

const LoginForm = (props) => {
  return (
  <form onSubmit={props.handleSubmit} > 
      <div>
        <Field name="login" component={Input} placeholder={"Login"}
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
    console.log(data)
  }
    return (<>
    <h1>login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
      </>
      )
}

export default Login
// этот логин нужно законектить к стору и диспатчить
