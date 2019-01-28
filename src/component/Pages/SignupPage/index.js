import React, { Component } from "react";
import Button from "../../Atoms/Button";
import { Field, reduxForm } from "redux-form";
import { Redirect } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./stylesSignupPage.sass";

class SignupPage extends Component {
  handleSignup = values => {
    const { fetchData } = this.props;
    const { username, email, password1, password2 } = values;

    if (!username || !email || !password1 || !password2) {
      toast.error("Llena el formulario!");
      return;
    }

    if (password1 !== password2) {
      toast.error("Las contraseñas no coinciden!");
      return;
    }

    fetchData({ username, email, password1, password2 });
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
      <main className="Signup">
        <div className="Signup--wrap">
          <form
            id="Signup"
            className="Signup--Form"
            onSubmit={handleSubmit(this.handleSignup)}
          >
            <h4>Signup</h4>
            <div className="Signup--Field">
              <label htmlFor="username">Username:</label>
              <Field name="username" component="input" type="text" />
            </div>
            <div className="Signup--Field">
              <label htmlFor="email">Email:</label>
              <Field name="email" component="input" type="email" />
            </div>
            <div className="Signup--Field">
              <label htmlFor="password1">Password:</label>
              <Field name="password1" component="input" type="password" />
            </div>
            <div className="Signup--Field">
              <label htmlFor="password2">Confirm Password:</label>
              <Field name="password2" component="input" type="password" />
            </div>
            <div>
              <Button theme="Primary" size="Medium" type="submit">
                Signup
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

const SignupPageForm = reduxForm({
  // a unique name for the form
  form: "signup"
})(SignupPage);

export default SignupPageForm;
