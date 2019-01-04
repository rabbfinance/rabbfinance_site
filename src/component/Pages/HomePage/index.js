import React, { Component } from "react";
import Button from "../../Atoms/Button";
import { Field, reduxForm } from "redux-form";
import { toast, ToastContainer } from "react-toastify";
import "./stylesHomePage.sass";

class HomePage extends Component {
  componentDidMount() {
    const { getListTodo } = this.props;
    getListTodo();
  }
  handleCreate = values => {
    const { createTodo } = this.props;
    if (!values.description) {
      toast.error("Llene el campo, para crear una tarea");
      return;
    }
    createTodo(values.description);
  };
  render() {
    const { handleSubmit, todo } = this.props;
    return (
      <main className="Home">
        <div className="Home--warp">
          <h1>Todo</h1>
          <div className="Home--header">
            <form
              id="Login"
              className="Login--Form"
              onSubmit={handleSubmit(this.handleCreate)}
            >
              <Field
                name="description"
                component="input"
                type="text"
                placeholder="Escribe tu tarea aqui"
              />
              <Button theme="Primary">Enviar</Button>
            </form>
          </div>
          <div>
            <ul className="Home--list">
              {todo.map(item => {
                return (
                  <li className="Home--item" key={item.id}>
                    <span> {item.description}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <ToastContainer
          hideProgressBar
          autoClose={3000}
          position={toast.POSITION.BOTTOM_CENTER}
        />
      </main>
    );
  }
}
const HomePageForm = reduxForm({
  // a unique name for the form
  form: "create-task"
})(HomePage);

export default HomePageForm;
