import React from "react";

import CreateNewTodo from "./CreateNewTodo";
import TodoList from "./TodoList";

import "../../utils/reset.css";
import "./styles.css";

function TodoApp() {
  const [todos, setTodos] = React.useState([]);

  return (
    <div className="wrapper">
      <div className="list-wrapper">
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
      <CreateNewTodo setTodos={setTodos} />
    </div>
  );
}

export default TodoApp;
