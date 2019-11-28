import React from 'react';


import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
  return (
  <form onSubmit={props.handleSubmit} > 
      <div>
        <Field name="login" component="input" placeholder={"Login"}/>
      </div>
            <div>
        <Field name="password" component="input" placeholder={"Password"}/>
      </div>
      <div>
        <Field name="rememberMe" component="input" type={"checkbox"}/> remember me
      </div>
 <div>
        <button>Login</button>
      </div>
</form>
)
  }

  const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
  
const Login = (props) => {
  let onSubmit = (data) => {}
    return (<>
    <h1>login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
      </>
      )
}

export default Login
// этот логин нужно законектить к стору и диспатчить
