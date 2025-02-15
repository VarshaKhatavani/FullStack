/**
 * Enhanced the application logic to achieve greater modularity
 * and maintainability.
 *
 */

import React from "react";

import CreateNewTodo from "./CreateNewTodo";
import TodoList from "./TodoList";

import "../../utils/reset.css";
import "./styles.css";

function TodoApp() {
  const [todos, setTodos] = React.useState([]);
  console.log(todos);

  function handleCreateTodo(value) {
    setTodos((todos) => {
      return [
        ...todos,
        {
          value,
          id: crypto.randomUUID(),
        },
      ];
    });
  }

  function handleToggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }

        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      })
    );
  }

  function handleDeleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
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
