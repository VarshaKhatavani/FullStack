import React from "react";

function SearchForm({ runSearch }) {
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <div className="search-form">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => setSearchTerm("I'm from button click ")}>
        Search!
      </button>
    </div>
  );
}

export default SearchForm;
