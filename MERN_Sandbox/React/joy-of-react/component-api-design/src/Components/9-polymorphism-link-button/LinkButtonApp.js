import React from "react";

import LinkButton from "./LinkButton";

import "./reset.css";
import "./styles.css";

function LinkButtonApp() {
  function exportData() {
    // Imagine there was logic here, maybe
    // a network request to generate the data.
    console.log("exportData function invoked");
  }

  return (
    <main>
      <LinkButton href="/add-transaction">Add Transaction</LinkButton>
      <LinkButton href="/report">View Report</LinkButton>
      <LinkButton onClick={exportData}>Export All Data</LinkButton>
    </main>
  );
}

export default LinkButtonApp;
