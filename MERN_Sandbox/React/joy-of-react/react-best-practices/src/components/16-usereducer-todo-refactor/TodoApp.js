import React from "react";

import CreateNewTodo from "./CreateNewTodo";
import TodoList from "./TodoList";

import "../../utils/reset.css";
import "./styles.css";

function reducer(todos, action) {
  if (action.type === "create-todo") {
    return [
      ...todos,
      {
        value: action.value,
        id: action.id,
      },
    ];
  } else if (action.type === "toggle-todo") {
    return todos.map((todo) => {
      if (todo.id !== action.id) {
        return todo;
      }

      return {
        ...todo,
        isCompleted: !todo.isCompleted,
      };
    });
  } else if (action.type === "delete-todo") {
    return todos.filter((todo) => todo.id !== action.id);
  }
}

function TodoApp() {
  const [todos, dispatch] = React.useReducer(reducer, []);

  function handleCreateTodo(value) {
    dispatch({
      type: "create-todo",
      id: crypto.randomUUID(),
      value,
    });
  }

  function handleToggleTodo(id) {
    dispatch({
      type: "toggle-todo",
      id,
    });
  }

  function handleDeleteTodo(id) {
    dispatch({
      type: "delete-todo",
      id,
    });
  }

  return (
    <div className="wrapper">
      <div className="list-wrapper">
        <TodoList
          todos={todos}
          handleToggleTodo={handleToggleTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      </div>
      <CreateNewTodo handleCreateTodo={handleCreateTodo} />
    </div>
  );
}

export default TodoApp;
