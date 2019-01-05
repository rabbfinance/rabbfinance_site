import { combineReducers } from "redux";

import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_START } from "./actions";

function auth(state = !!localStorage.token, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.newStateAuth;
    case LOGOUT_START:
      return !state;
    default:
      return state;
  }
}

function error(state = null, action) {
  switch (action.type) {
    case LOGIN_FAILURE:
      return action.error;
    default:
      return state;
  }
}

export default combineReducers({
  auth,
  error
});
