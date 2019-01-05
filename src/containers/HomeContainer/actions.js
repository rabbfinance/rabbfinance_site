import axios from "axios";

export const SAVE_LIST_TASK = "app/homePage/SAVE_LIST_TASK";

const saveList = newList => ({
  type: SAVE_LIST_TASK,
  newList
});

function fetchGetList() {
  let url = `http://localhost:8000/api/app/viewsets/to-do/`;
  return function(dispatch) {
    axios({
      method: "GET",
      url: url,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.token
      }
    })
      .then(({ data }) => {
        dispatch(saveList(data.todos));
      })
      .catch(response => {
        console.log(response);
      });
  };
}

function fetchCreateTodo(description) {
  let url = `http://localhost:8000/api/app/viewsets/to-do/`;
  return function(dispatch, getState) {
    const todo = [...getState().todo.list];
    axios({
      method: "POST",
      url: url,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.token
      },
      data: {
        description
      }
    })
      .then(({ data }) => {
        todo.push(data);
        dispatch(saveList(todo));
      })
      .catch(response => {
        console.log(response);
      });
  };
}

export { saveList, fetchGetList, fetchCreateTodo };
