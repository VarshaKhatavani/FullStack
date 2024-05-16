import React from 'react';

function AddNewItemForm() {
  return (
    <div className="new-list-item-form">
      <form>
        <label htmlFor="new-list-form-input">
          New item:
        </label>
        
        <div className="row">
          <input
            id="new-list-form-input"
            type="text"
          />
          <button>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewItemForm;