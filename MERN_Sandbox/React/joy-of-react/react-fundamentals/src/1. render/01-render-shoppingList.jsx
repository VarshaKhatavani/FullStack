import React from "react";

const ShoppingList = () => {
  const shoppingList = ["apple", "banana", "carrot"];
  return (
    <>
      <div> Items left to purchase: {shoppingList.length} </div>
    </>
  );
};
export default ShoppingList;

/*
const shoppingList = ["apple", "banana", "carrot"];

This code...
const element = <div>Items left to purchase: {shoppingList.length}</div>;

...is equivalent to this code: 
const compiledElement = React.createElement(
  "div",
  {},
  "Items left to purchase: ",
  shoppingList.length
);

const root = createRoot(document.getElementById("root"));
root.render(element);
*/
