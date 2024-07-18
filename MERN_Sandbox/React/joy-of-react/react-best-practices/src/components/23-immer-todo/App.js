import React from "react";

import { produce } from "immer";

import "../../utils/reset.css";
import "./styles.css";

import CreateNewTodo from "./CreateNewTodo";
import TodoList from "./TodoList";

function reducer(todos, action) {
  switch (action.type) {
    case "create-todo": {
      return [
        ...todos,
        {
          value: action.value,
          id: crypto.randomUUID(),
        },
      ];
    }

    case "toggle-todo": {
      return todos.map((todo) => {
        if (todo.id !== action.id) {
          return todo;
        }

        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      });
    }
    case "delete-todo": {
      return todos.filter((todo) => todo.id !== action.id);
    }
  }
}

function App() {
  const [todos, dispatch] = React.useReducer(reducer, []);

  function handleCreateTodo(value) {
    dispatch({
      type: "create-todo",
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

export default App;
