import axios from "axios";
import { toast } from "react-toastify";
export const SIGNUP_START = "app/LoginPage/SIGNUP_START";
export const SIGNUP_SUCCESS = "app/LoginPage/SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "app/LoginPage/SIGNUP_FAILURE";

export const signupSuccess = newState => ({
  type: SIGNUP_SUCCESS,
  newState
});

export const signupFailure = error => ({
  type: SIGNUP_FAILURE,
  error
});

export function fetchSignup(payload) {
  let url = `https://api.pygabo.com/rest-auth/registration/`;
  return function(dispatch) {
    axios({
      method: "POST",
      url: url,
      headers: {
        "Content-Type": "application/json"
      },
      data: payload
    })
      .then(response => {
        console.log(response);
        dispatch(signupSuccess(true));
        toast.success("Usuario registrado");
      })
      .catch(response => {
        console.log(response);
        dispatch(signupFailure("response.error"));
      });
  };
}
