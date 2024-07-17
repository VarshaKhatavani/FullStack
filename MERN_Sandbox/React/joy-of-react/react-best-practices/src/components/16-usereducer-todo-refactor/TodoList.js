import React from 'react';
import { X } from 'react-feather';

import VisuallyHidden from './VisuallyHidden';

function TodoList({ todos, handleToggleTodo, handleDeleteTodo }) {
  return (
    <ol className="todo-list">
      {todos.map(({ id, value, isCompleted }) => (
        <li key={id}>
          <button
            className={`
              toggle
              ${isCompleted ? 'completed' : undefined}
            `}
            onClick={() => {
              handleToggleTodo(id);
            }}
            aria-label="toggle item"
          >
            {value}
            {isCompleted && (
              <VisuallyHidden> (Completed)</VisuallyHidden>
            )}
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