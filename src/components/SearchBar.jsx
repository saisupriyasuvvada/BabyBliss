import React from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for baby products..."
        className="search-input"
      />
      <button className="search-btn">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
