import SearchForm from "./SearchForm";
import "./reset.css";
import "./styles.css";

function SearchTermApp() {
  // This function is a placeholder.
  function runSearch(searchTerm) {
    window.alert(`Searched for: ${searchTerm}`);
  }

  return <SearchForm runSearch={runSearch} />;
}

export default SearchTermApp;
