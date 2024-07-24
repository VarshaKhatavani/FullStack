import React from "react";
import { X } from "react-feather";

import VisuallyHidden from "../../utils/VisuallyHidden";

function TodoList({ todos, handleToggleTodo, handleDeleteTodo }) {
  return (
    <ol className="todo-list">
      {todos.map(({ id, value, isCompleted }, index) => (
        <li key={id}>
          <button
            className={`
              toggle
              ${isCompleted ? "completed" : undefined}
            `}
            onClick={() => {
              handleToggleTodo(index);
            }}
            aria-label="toggle item"
          >
            {value}
            {isCompleted && <VisuallyHidden> (Completed)</VisuallyHidden>}
          </button>
          <button
            className="delete-btn"
            onClick={() => {
              handleDeleteTodo(id);
            }}
          >
            <X />
            <VisuallyHidden>Delete Item</VisuallyHidden>
          </button>
        </li>
      ))}
    </ol>
  );
}

export default TodoList;
