import React from "react";
import reviews from "../data/reviews";
import "../styles/Reviews.css";

function Reviews() {
  return (
    <section className="reviews">
      <h2>What Our Customers Say</h2>
      <div className="reviews-grid">
        {reviews.map(r => (
          <div className="reviews-card" key={r.id}>
            <img src={r.avatar} className="reviews-avatar" alt={r.name} />
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