import React, { useState } from "react";
import "../styles/SearchBar.css";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/menu?search=${encodeURIComponent(text)}`);
  }

  return (
    <form className="searchBar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for donuts..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;