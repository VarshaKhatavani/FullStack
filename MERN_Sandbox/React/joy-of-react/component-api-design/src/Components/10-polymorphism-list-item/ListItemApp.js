import React from "react";

import List from "./List";

import "./reset.css";
import "./styles.css";

function ListItemApp() {
  return (
    <main>
      <List as="ul">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </List>
      <List as="ol">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </List>
    </main>
  );
}

export default ListItemApp;
