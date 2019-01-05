import { connect } from "react-redux";
import { fetchLogin } from "./actions";
import LoginPage from "../../component/Pages/LoginPage";

const mapStateToProps = state => {
  return {
    islogin: state.login.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (user, password) => dispatch(fetchLogin(user, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
