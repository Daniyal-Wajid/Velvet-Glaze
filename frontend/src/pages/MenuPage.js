import React, { useState, useEffect } from "react";
import DonutGrid from "../components/DonutGrid";

function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
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
        console.error("Error fetching categories:", err);
      }
    };

    fetchCategories();
  }, []);

  return (
    <main>
      <div
        style={{
          background: "#f9e0ae",
          padding: "2rem 0",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontFamily: "'Fredoka One', cursive", color: "#c24914" }}>
          Our Donuts
        </h1>
        <div style={{ margin: "1.5rem 0" }}>
          <button
            style={{
              background: selectedCategory === "All" ? "#c24914" : "#fff",
              color: selectedCategory === "All" ? "#fff" : "#3e2723",
              fontWeight: "bold",
              border: "none",
              borderRadius: "18px",
              margin: "0 0.4rem",
              padding: "0.6rem 1.4rem",
              cursor: "pointer",
              fontSize: "1rem",
            }}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat._id}
              style={{
                background: selectedCategory === cat.name ? "#c24914" : "#fff",
                color: selectedCategory === cat.name ? "#fff" : "#3e2723",
                fontWeight: "bold",
                border: "none",
                borderRadius: "18px",
                margin: "0 0.4rem",
                padding: "0.6rem 1.4rem",
                cursor: "pointer",
                fontSize: "1rem",
              }}
              onClick={() => setSelectedCategory(cat.name)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>
      <DonutGrid
        category={selectedCategory === "All" ? null : selectedCategory}
      />
    </main>
  );
}

export default MenuPage;
