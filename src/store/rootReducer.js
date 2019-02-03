import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as formReducer } from "redux-form";
import LoginReducer from "../containers/LoginContainer/reducer";
import HomeReducer from "../containers/HomeContainer/reducer";
import SignupReducer from "../containers/SignupContainer/reducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    form: formReducer,
    login: LoginReducer,
    todo: HomeReducer,
    signup: SignupReducer
  });
