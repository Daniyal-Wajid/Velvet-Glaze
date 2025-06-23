import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main style={{ textAlign: "center", padding: "5rem 1rem" }}>
      <h1 style={{ color: "#c24914", fontFamily: "'Fredoka One', cursive", fontSize: "3rem" }}>404</h1>
      <p style={{ fontSize: "1.4rem" }}>Page not found!</p>
      <Link to="/" style={{ color: "#c24914", textDecoration: "underline", fontWeight: "bold" }}>Go Home</Link>
    </main>
  );
}

export default NotFoundPage;