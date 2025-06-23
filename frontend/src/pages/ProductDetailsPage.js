import React from "react";
import { useParams, Link } from "react-router-dom";
import donuts from "../data/donuts";

function ProductDetailsPage() {
  const { id } = useParams();
  const donut = donuts.find(d => String(d.id) === String(id));

  if (!donut) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Donut Not Found</h2>
        <Link to="/menu">Back to Menu</Link>
      </div>
    );
  }

  return (
    <main style={{ maxWidth: "800px", margin: "2rem auto", background: "#fff", borderRadius: "16px", padding: "2rem", boxShadow: "0 2px 12px #c2491420" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
        <img src={donut.image} alt={donut.name} style={{ width: "300px", borderRadius: "16px", objectFit: "cover" }} />
        <div style={{ flex: "1" }}>
          <h2 style={{ color: "#c24914", fontFamily: "'Fredoka One', cursive" }}>{donut.name}</h2>
          <p>{donut.description}</p>
          <p><b>Price:</b> Rs. {donut.price.toFixed(2)}</p>
          <p><b>Ingredients:</b> {donut.ingredients}</p>
          <p><b>Allergens:</b> {donut.allergens}</p>
          <p><b>Nutrition:</b> {donut.nutrition}</p>
          <button style={{ background: "#c24914", color: "#fff", border: "none", borderRadius: "18px", padding: "0.7rem 2rem", fontWeight: "bold", fontSize: "1.2rem", marginTop: "1rem", cursor: "pointer" }}>Add to Cart</button>
        </div>
      </div>
    </main>
  );
}

export default ProductDetailsPage;