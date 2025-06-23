import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Featured.css";

function Featured() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    const fetchDonuts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/donuts");
        const featuredDonuts = res.data.filter((d) => d.isFeatured).slice(0, 4);
        setFeatured(featuredDonuts);
      } catch (err) {
        console.error("Error fetching featured donuts:", err);
      }
    };

    fetchDonuts();
  }, []);

  return (
    <section className="featured">
      <h2>🍩 Featured Donuts</h2>
      <div className="featured-grid">
        {featured.map((donut) => (
          <Link
            to={`/menu/${donut._id}`}
            key={donut._id}
            className="featured-card"
          >
            <img
              src={`http://localhost:5000/uploads/${donut.image}`}
              alt={donut.name}
              className="featured-img"
            />
            <div className="featured-card-content">
              <h3>{donut.name}</h3>
              <p>{donut.description.slice(0, 60)}...</p>
              <span className="featured-price">
                Rs. {Number(donut.price).toFixed(2)}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Featured;
