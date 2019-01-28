import { connect } from "react-redux";
import { fetchSignup } from "./actions";
import SignupPage from "../../component/Pages/SignupPage";

const mapDispatchToProps = dispatch => {
  return {
    fetchData: payload => dispatch(fetchSignup(payload))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignupPage);
