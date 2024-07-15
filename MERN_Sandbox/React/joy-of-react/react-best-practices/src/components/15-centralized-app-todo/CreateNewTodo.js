import React from 'react';

function CreateNewTodo({ setTodos }) {
  const [value, setValue] = React.useState('');
  
  return (
    <div className="create-new-todo-wrapper">
      <form
        onSubmit={(event) => {
          event.preventDefault();

          setTodos(todos => {
            return [
              ...todos,
              {
                value,
                id: crypto.randomUUID(),
              },
            ];
          });

          setValue('');
        }}
      >
        <label htmlFor="new-list-form-input">
          New item:
        </label>

        <div className="row">
          <input
            id="new-list-form-input"
            type="text"
            value={value}
            onChange={event => {
              setValue(event.target.value)
            }}
          />
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}

export default CreateNewTodo;