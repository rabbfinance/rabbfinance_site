import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./containers/PrivateRoute";
import LoginPage from "./containers/LoginContainer";
import HomePage from "./containers/HomeContainer";
import SignupPage from "./containers/SignupContainer";

import "react-toastify/dist/ReactToastify.css";

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

NoMatch.propTypes = {
  location: PropTypes.any.isRequired
};

export default function RouterApp() {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      <Route component={NoMatch} />
    </Switch>
  );
}
// 'Authorization': 'Bearer '
