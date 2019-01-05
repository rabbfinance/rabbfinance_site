import React, { Component } from "react";
import Button from "../../Atoms/Button";
import { Field, reduxForm } from "redux-form";
import { Redirect } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./stylesLoginPage.sass";

class LoginPage extends Component {
  handleLogin = values => {
    const { fetchData } = this.props;
    console.log("values", values);
    if (!values.username || !values.password) {
      toast.error("Llena el formulario !");
      return;
    }
    fetchData(values.username, values.password);
  };

  render() {
    const { handleSubmit, islogin } = this.props;
    if (islogin) {
      return (
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      );
    }

    return (
      <main className="Login">
        <div className="Login--wrap">
          <form
            id="Login"
            className="Login--Form"
            onSubmit={handleSubmit(this.handleLogin)}
          >
            <h4>Login</h4>
            <div className="Login--Field">
              <label htmlFor="username">Username: </label>
              <Field name="username" component="input" type="text" />
            </div>
            <div className="Login--Field">
              <label htmlFor="password">Password: </label>
              <Field name="password" component="input" type="password" />
            </div>
            <div>
              <Button theme="Primary" size="Medium" type="submit">
                Login
              </Button>
            </div>
          </form>
        </div>
        <ToastContainer
          hideProgressBar
          autoClose={3000}
          position={toast.POSITION.BOTTOM_CENTER}
        />
      </main>
    );
  }
}
const LoginPageForm = reduxForm({
  // a unique name for the form
  form: "login"
})(LoginPage);

export default LoginPageForm;
