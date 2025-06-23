import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/SearchPage.css";
import { Link } from "react-router-dom";

function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:5000/api/donuts/search?query=${encodeURIComponent(
          query
        )}`
      );
      setResults(res.data);
    } catch (err) {
      console.error("Search error:", err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [query]);

  return (
    <div className="page-wrapper">
      <main className="search-page page-content">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search for donuts..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        {loading ? (
          <p className="loading">Searching...</p>
        ) : (
          <div className="results-grid">
            {results.length === 0 && query ? (
              <p>No results found for "{query}"</p>
            ) : (
              results.map((donut) => (
                <Link
                  to={`/product/${donut._id}`}
                  key={donut._id}
                  className="donut-card"
                >
                  <img
                    src={`http://localhost:5000/uploads/${donut.image}`}
                    alt={donut.name}
                  />
                  <h4>{donut.name}</h4>
                  <p>Rs. {donut.price.toFixed(2)}</p>
                </Link>
              ))
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default SearchPage;
