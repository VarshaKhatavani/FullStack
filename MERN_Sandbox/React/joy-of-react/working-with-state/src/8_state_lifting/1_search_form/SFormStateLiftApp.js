import React from "react";
import "./reset.css";
import "./styles.css";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

function SFormStateLiftApp() {
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <>
      <header>
        <a className="logo" href="/">
          Wanda’s Fruits
        </a>
        <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </header>
      <main>
        <SearchResults searchTerm={searchTerm} />
      </main>
    </>
  );
}

export default SFormStateLiftApp;
