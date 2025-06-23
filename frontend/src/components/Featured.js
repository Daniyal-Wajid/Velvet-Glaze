import React from "react";
import donuts from "../data/donuts";
import { Link } from "react-router-dom";
import "../styles/Featured.css";

function Featured() {
  const featured = donuts.filter(d => d.isFeatured).slice(0, 4);
  return (
    <section className="featured">
      <h2>Featured Donuts</h2>
      <div className="featured-grid">
        {featured.map(donut => (
          <Link to={`/menu/${donut.id}`} key={donut.id} className="featured-card">
            <img src={donut.image} alt={donut.name} />
            <div>
              <h3>{donut.name}</h3>
              <p>{donut.description}</p>
              <span className="featured-price">Rs. {donut.price.toFixed(2)}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Featured;