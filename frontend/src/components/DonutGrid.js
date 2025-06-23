import React, { useState } from "react";
import donuts from "../data/donuts";
import { Link, useLocation } from "react-router-dom";
import "../styles/DonutGrid.css";

function DonutGrid(props) {
  const { category: propCategory, featured = false } = props;
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const urlCategory = queryParams.get("category");
  const [search, setSearch] = useState("");

  let list = donuts.filter(d =>
    (!propCategory || d.category === propCategory) &&
    (!urlCategory || d.category === urlCategory) &&
    (!featured || d.isFeatured) &&
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!propCategory && !urlCategory) {
    list = donuts.filter(d =>
      (!featured || d.isFeatured) &&
      d.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div className="donutGrid">
      <div className="donutGrid-searchBar">
        <input
          placeholder="Search donuts..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div className="donutGrid-grid">
        {list.map(donut => (
          <Link to={`/menu/${donut.id}`} key={donut.id} className="donutGrid-card">
            <img src={donut.image} alt={donut.name} />
            <div className="donutGrid-info">
              <h3>{donut.name}</h3>
              <p className="donutGrid-price">Rs. {donut.price.toFixed(2)}</p>
              <button className="donutGrid-addBtn">Add to Cart</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DonutGrid;