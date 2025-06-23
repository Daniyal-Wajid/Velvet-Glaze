import React, { useState } from "react";
import "../styles/Newsletter.css";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  }

  return (
    <div className="newsletter">
      <h3>Subscribe to Our Newsletter</h3>
      <p>Get exclusive offers and the latest donut news!</p>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Your email address"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button type="submit">Subscribe</button>
        </form>
      ) : (
        <div className="newsletter-success">Thank you for subscribing!</div>
      )}
    </div>
  );
}

export default Newsletter;