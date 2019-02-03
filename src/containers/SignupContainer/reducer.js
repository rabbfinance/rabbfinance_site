import { combineReducers } from "redux";

import { SIGNUP_SUCCESS, SIGNUP_FAILURE } from "./actions";

function registered(state = false, action) {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return action.newState;
    default:
      return state;
  }
}

function error(state = null, action) {
  switch (action.type) {
    case SIGNUP_FAILURE:
      return action.error;
    default:
      return state;
  }
}

export default combineReducers({
  registered,
  error
});
