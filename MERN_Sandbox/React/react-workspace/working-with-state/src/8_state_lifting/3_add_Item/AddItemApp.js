import React from "react";
import "./reset.css";
import "./styles.css";

import AddNewItemForm from "./AddNewItemForm";

function AddItemApp() {
  const [items, setItems] = React.useState([
    { id: crypto.randomUUID(), itemName: "Avocados" },
    { id: crypto.randomUUID(), itemName: "Broccoli" },
    { id: crypto.randomUUID(), itemName: "Carrots" },
  ]);

  const handleAddItem = (label) => {
    console.log(label);
    const newItem = {
      itemName: label,
      id: crypto.randomUUID(),
    };
    const nextItem = [...items, newItem];
    setItems(nextItem);
  };

  return (
    <div className="wrapper">
      <div className="list-wrapper">
        <ol className="shopping-list">
          {items.map(({ id, itemName }) => {
            return <li key={id}> {itemName} </li>;
          })}
        </ol>
      </div>
      <AddNewItemForm handleAddItem={handleAddItem} />
    </div>
  );
}

export default AddItemApp;
