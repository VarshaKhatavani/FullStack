import React from "react";
import { X, Search } from "react-feather";

import "./reset.css";
import "./styles.css";

import VisuallyHidden from "./VisuallyHidden";

function SearchApp() {
  const [showSearchField, setShowSearchField] = React.useState(false);

  // if (showSearchField) {
  //   searchId = React.useId();
  // }

  function handleToggleSearch(event) {
    event.preventDefault();
    setShowSearchField(!showSearchField);
  }

  // Generate ID when only needs
  function SearchInput() {
    const searchId = React.useId();

    return (
      <div className="search-field-wrapper">
        <label htmlFor={searchId}>
          <VisuallyHidden>Search</VisuallyHidden>
        </label>
        <input id={searchId} className="search-field" />
      </div>
    );
  }

  return (
    <>
      <form>
        {showSearchField && <SearchInput />}
        <button className="search-toggle-button" onClick={handleToggleSearch}>
          {showSearchField ? <X /> : <Search />}
          <VisuallyHidden>Toggle search field</VisuallyHidden>
        </button>
      </form>
    </>
  );
}

export default SearchApp;
