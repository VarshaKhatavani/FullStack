import React from "react";

import { produce } from "immer";

import "../../utils/reset.css";
import "./styles.css";

import CreateNewTodo from "./CreateNewTodo";
import TodoList from "./TodoList";

function reducer(todos, action) {
  return produce(todos, (draftTodos) => {
    switch (action.type) {
      case "create-todo": {
        draftTodos.push({
          value: action.value,
          id: crypto.randomUUID(),
        });
        break;
      }

      case "toggle-todo": {
        draftTodos[action.index].isCompleted =
          !draftTodos[action.index].isCompleted;
        break;
      }
      case "delete-todo": {
        draftTodos.splice(action.index, 1);
        break;
      }

      default:
        console.error("error");
    }
  });
}

function TodoImmerApp() {
  const [todos, dispatch] = React.useReducer(reducer, []);

  function handleCreateTodo(value) {
    dispatch({
      type: "create-todo",
      id: crypto.randomUUID(),
      value,
    });
  }

  function handleToggleTodo(index) {
    dispatch({
      type: "toggle-todo",
      index,
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

export default TodoImmerApp;
