import React from 'react';

import CreateNewTodo from './CreateNewTodo';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = React.useState([]);

  function handleCreateTodo(value) {
    setTodos([
      ...todos,
      {
        value,
        id: crypto.randomUUID(),
      },
    ]);
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
      <CreateNewTodo
        handleCreateTodo={handleCreateTodo}
      />
    </div>
  );
}

export default App;