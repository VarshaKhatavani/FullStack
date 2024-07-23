import React from "react";

function CreateNewTodo({ handleCreateTodo }) {
  const [value, setValue] = React.useState("");

  return (
    <div className="create-new-todo-wrapper">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleCreateTodo(value);
          setValue("");
        }}
      >
        <label htmlFor="new-list-form-input">New item:</label>

        <div className="row">
          <input
            id="new-list-form-input"
            type="text"
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
            }}
          />
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}

export default CreateNewTodo;
