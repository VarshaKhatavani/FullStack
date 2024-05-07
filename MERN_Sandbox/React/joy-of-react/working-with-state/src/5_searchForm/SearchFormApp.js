import React from "react";
import "./reset.css";
import "./styles.css";

function SearchFormApp() {
  const [searchTerm, setSearchTerm] = React.useState("cats");

  return (
    <>
      <form>
        <label htmlFor="search-input">Search:</label>
        <input
          type="text"
          id="search-input"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </form>
      <p>Search term: {searchTerm}</p>
    </>
  );
}

export default SearchFormApp;
