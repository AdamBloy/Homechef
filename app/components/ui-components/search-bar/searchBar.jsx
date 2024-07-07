import styles from "./searchBar.module.css";
import { useState } from "react";

export default function SearchBar({ filterItems }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleFilterButton() {
    filterItems(searchTerm);
  }

  function handleSearchTermInput(e) {
    setSearchTerm(e.target.value);
  }

  function handleClearSearch() {
    setSearchTerm("");
    filterItems("");
  }
  return (
    <>
      <div className={styles.searchContainer}>
        <p>Search recipes</p>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchTermInput}
          placeholder="Search for food"
        ></input>
        <div className={styles.btnContainer}>
          <button className={styles.searchButton} onClick={handleFilterButton}>
            Find!
          </button>
          <button className={styles.clearButton} onClick={handleClearSearch}>
            Clear!
          </button>
        </div>
      </div>
    </>
  );
}
