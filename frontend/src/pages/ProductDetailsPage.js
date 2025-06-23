import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  const { id } = useParams();
  const [donut, setDonut] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchDonut = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/donuts");
        const found = res.data.find((d) => String(d._id) === String(id));
        setDonut(found);
      } catch (err) {
        console.error("Error fetching donut:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDonut();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      const token = localStorage.getItem("token"); // Get JWT from localStorage
      if (!token) {
        return setMessage("Please login to add to cart.");
      }

      const res = await axios.post(
        "http://localhost:5000/api/cart/add-to-cart",
        {
          donutId: donut._id,
          quantity: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage("Donut added to cart!");
    } catch (error) {
      console.error("Add to cart error:", error);
      setMessage("Failed to add to cart.");
    }
  };

  if (loading) {
    return <p style={{ textAlign: "center", marginTop: "2rem" }}>Loading...</p>;
  }

  if (!donut) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Donut Not Found</h2>
        <Link to="/menu">Back to Menu</Link>
      </div>
    );
  }

  return (
    <main
      style={{
        maxWidth: "800px",
        margin: "2rem auto",
        background: "#fff",
        borderRadius: "16px",
        padding: "2rem",
        boxShadow: "0 2px 12px #c2491420",
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
        <img
          src={`http://localhost:5000/uploads/${donut.image}`}
          alt={donut.name}
          style={{ width: "300px", borderRadius: "16px", objectFit: "cover" }}
        />
        <div style={{ flex: "1" }}>
          <h2
            style={{ color: "#c24914", fontFamily: "'Fredoka One', cursive" }}
          >
            {donut.name}
          </h2>
          <p>{donut.description}</p>
          <p>
            <b>Price:</b> Rs. {Number(donut.price).toFixed(2)}
          </p>
          <p>
            <b>Ingredients:</b> {donut.ingredients}
          </p>
          <p>
            <b>Allergens:</b> {donut.allergens}
          </p>
          <p>
            <b>Nutrition:</b> {donut.nutrition}
          </p>
          <button
            onClick={handleAddToCart}
            style={{
              background: "#c24914",
              color: "#fff",
              border: "none",
              borderRadius: "18px",
              padding: "0.7rem 2rem",
              fontWeight: "bold",
              fontSize: "1.2rem",
              marginTop: "1rem",
              cursor: "pointer",
            }}
          >
            Add to Cart
          </button>
          <p style={{ marginTop: "1rem", color: "#444" }}>{message}</p>
        </div>
      </div>
    </main>
  );
}

export default ProductDetailsPage;
