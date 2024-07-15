import React from 'react';
import { X } from 'react-feather';

import VisuallyHidden from './VisuallyHidden';

function TodoList({ todos, setTodos }) {
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
              setTodos(todos.map(todo => {
                if (todo.id !== id) {
                  return todo;
                }
                
                return {
                  ...todo,
                  isCompleted: !todo.isCompleted,
                }
              }));
            }}
            aria-label="toggle item"
          >
            {value}
            {isCompleted && (
              <VisuallyHidden>
                {' '}(Completed)
              </VisuallyHidden>
            )}
          </button>
          <button
            className="delete-btn"
            onClick={() => {
              setTodos(todos.filter(todo => (
                todo.id !== id
              )));
            }}
          >
            <X />
            <VisuallyHidden>
              Delete Item
            </VisuallyHidden>
          </button>
        </li>
      ))}
    </ol>
  );
}

export default TodoList;