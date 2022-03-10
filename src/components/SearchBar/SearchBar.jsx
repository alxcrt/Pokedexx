import React from "react";
import "./SearchBar.css";

export default function SearchBar(props) {
  const { onSearch } = props;

  return (
    <div>
      <input
        maxLength={33}
        className="searchBar"
        type="text"
        placeholder="Search pokemon name, number or type..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
