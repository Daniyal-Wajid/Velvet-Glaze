import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/CategorySection.css";

function CategorySection() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/category/categories"
        );
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="categories">
      <h2>Shop by Category</h2>
      <div className="categories-grid">
        {categories.map((cat) => (
          <Link
            to={`/menu?category=${encodeURIComponent(cat.name)}`}
            key={cat._id}
            className="category-card"
          >
            <img
              src={`http://localhost:5000${cat.image}`}
              alt={cat.name}
              style={{ objectFit: "cover", height: "150px", width: "100%" }}
            />
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
