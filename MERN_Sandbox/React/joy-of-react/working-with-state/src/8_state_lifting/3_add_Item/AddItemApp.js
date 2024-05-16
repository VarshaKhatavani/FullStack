import React from "react";

import AddNewItemForm from "./AddNewItemForm";

function AddItemApp() {
  return (
    <div className="wrapper">
      <div className="list-wrapper">
        <ol className="shopping-list">
          <li>Avocados</li>
          <li>Broccoli</li>
          <li>Carrots</li>
        </ol>
      </div>
      <AddNewItemForm />
    </div>
  );
}

export default AddItemApp;
