/**
 * AddNewItemForm is indeed a controlled component because its input element's
 * value is controlled by the component's state (label), and any changes to the input update this state.
 *
 */

import React from "react";

function AddNewItemForm({ handleAddItem }) {
  const [label, setLabel] = React.useState("");

  return (
    <div className="new-list-item-form">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleAddItem(label);
          setLabel("");
        }}
      >
        <label htmlFor="new-list-form-input">New item:</label>

        <div className="row">
          {/* controlled input */}
          <input
            id="new-list-form-input"
            type="text"
            value={label}
            onChange={(event) => {
              setLabel(event.target.value);
            }}
          />
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddNewItemForm;
