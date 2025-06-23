import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Reviews.css";

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/reviews");
        setReviews(res.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <section className="reviews">
      <h2>What Our Customers Say</h2>
      <div className="reviews-grid">
        {reviews.map((r) => (
          <div className="reviews-card" key={r._id}>
            <img
              src={`http://localhost:5000${r.avatar}`}
              className="reviews-avatar"
              alt={r.name}
            />
            <span className="reviews-name">{r.name}</span>
            <span className="reviews-stars">
              {"★".repeat(r.rating)}
              {"☆".repeat(5 - r.rating)}
            </span>
            <p className="reviews-text">{r.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
