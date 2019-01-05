import axios from "axios";
import { push } from "connected-react-router";
export const LOGIN_START = "app/LoginPage/LOGIN_START";
export const LOGIN_SUCCESS = "app/LoginPage/LOGIN_SUCCESS";
export const LOGIN_FAILURE = "app/LoginPage/LOGIN_FAILURE";
export const LOGOUT_START = "app/LoginPage/LOGOUT_START";

export const loginSuccess = newStateAuth => ({
  type: LOGIN_SUCCESS,
  newStateAuth
});

export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  error
});

export const logout = () => ({
  type: LOGOUT_START
});

export function fetchLogin(user, password) {
  let url = `http://0.0.0.0:8000/rest-auth/login/`;
  var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/gim;

  const body = {
    username: user,
    password: password,
    email: ""
  };
  if (re.test(user)) {
    body.username = "";
    body.email = user;
  }
  return function(dispatch) {
    axios({
      method: "POST",
      url: url,
      headers: {
        "Content-Type": "application/json"
      },
      data: body
    })
      .then(async response => {
        localStorage.token = response.data.key;
        await dispatch(loginSuccess(true));
        await dispatch(push("/"));
      })
      .catch(response => {
        console.log(response);
        dispatch(loginFailure("response.error"));
      });
  };
}
