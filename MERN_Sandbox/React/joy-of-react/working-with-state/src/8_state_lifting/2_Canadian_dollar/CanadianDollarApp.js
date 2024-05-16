import React from "react";
import "./reset.css";
import "./styles.css";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

function CanadianDollarApp() {
  return (
    <>
      <header>
        <a className="logo" href="/">
          Wanda’s Fruits
        </a>
        <SearchForm />
      </header>
      <main>
        <SearchResults />
      </main>
    </>
  );
}

export default CanadianDollarApp;
