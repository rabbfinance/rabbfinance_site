import { connect } from "react-redux";
import { fetchGetList, fetchCreateTodo } from "./actions";
import HomePage from "../../component/Pages/HomePage";

const mapStateToProps = state => {
  return {
    todo: state.todo.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getListTodo: () => dispatch(fetchGetList()),
    createTodo: description => dispatch(fetchCreateTodo(description))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
