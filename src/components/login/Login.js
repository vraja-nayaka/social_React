import React from "react";

import { Field, reduxForm } from "redux-form";
import { Input, required } from "./../../utils/validators";
import { login } from "./../../redux/auth-reducer";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import style from "./../../utils/FormsControls.module.css";

const LoginForm = props => {
  console.log(props)
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="email"
          type="text"
          label="Email address"
          component={Input}
          placeholder={"Enter your email"}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          name="password"
          type="password"
          label="Password"
          component={Input}
          placeholder={"Enter your pass"}
          validate={[required]}
        />
      </div>
      <div>
        <Field name="rememberMe" component={Input} type={"checkbox"} /> remember
        me
      </div>
      <div>
        <button>Login</button>
      </div>
      {props.error && (
        <div className={style.formSummaryError}>{props.error}</div>
      )}
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = props => {
  let onSubmit = data => {
    props.login(data);
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <>
      <h1>login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  );
};

let mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

let mapDispatchToProps = dispatch => {
  return {
    login: (email, password, rememberMe, captcha) => {
      dispatch(login(email, password, rememberMe, captcha));
    }
  };
};
const LoginWithDispatch = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default LoginWithDispatch;
