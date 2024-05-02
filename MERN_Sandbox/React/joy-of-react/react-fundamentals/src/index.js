import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const element = React.createElement("h1", { id: "hello" }, "Welcome to React!");

root.render(element);
