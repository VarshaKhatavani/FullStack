import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ShoppingList from "./01-Render-ShoppingList";
import FriendlyGreeting from "./02-Props-FriendlyGreeting";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const element = React.createElement("h1", { id: "hello" }, "Welcome to React!");

root.render(
  <>
    <ShoppingList />
    <FriendlyGreeting name="Varsha" />
    <FriendlyGreeting name="Julie" />
  </>
);
