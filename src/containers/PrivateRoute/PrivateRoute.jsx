import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { compose } from "redux";
import { Route, Redirect } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";

class PrivateRoute extends PureComponent {
  render() {
    const { islogin, component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => {
          if (islogin) {
            return <Component {...props} />;
          } else {
            return (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: props.location }
                }}
              />
            );
          }
        }}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    islogin: state.login.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute);
