import React from "react";
import categories from "../data/categories";
import { Link } from "react-router-dom";
import "../styles/CategorySection.css";

function CategorySection() {
  return (
    <section className="categories">
      <h2>Shop by Category</h2>
      <div className="categories-grid">
        {categories.map(cat => (
          <Link to={`/menu?category=${cat.name}`} key={cat.id} className="category-card">
            <img src={cat.image} alt={cat.name} />
            <div>
              <h3>{cat.name}</h3>
              <p>{cat.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;