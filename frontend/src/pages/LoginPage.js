import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // To navigate to other pages

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // To store any error messages
  const navigate = useNavigate(); // For navigation after successful login

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        // Store the JWT token in localStorage
        localStorage.setItem("token", data.token);

        // Redirect to HomePage after successful login
        navigate("/"); // Assuming '/home' is your homepage route
      } else {
        setError(data.message || "Something went wrong!");
      }
    } catch (err) {
      setError("Network error, please try again.");
    }
  };

  return (
    <main
      style={{
        maxWidth: "400px",
        margin: "3rem auto",
        background: "#fff",
        borderRadius: "16px",
        padding: "2rem",
        boxShadow: "0 2px 12px #c2491420",
      }}
    >
      <h2 style={{ color: "#c24914", fontFamily: "'Fredoka One', cursive" }}>
        Login
      </h2>
      {error && (
        <div style={{ color: "red", marginBottom: "1rem" }}>{error}</div>
      )}{" "}
      {/* Show error message if any */}
      <form
        onSubmit={handleLogin}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem",
          marginTop: "1.4rem",
        }}
      >
        <input
          type="email"
          placeholder="Email"
          style={{
            padding: "0.7rem",
            borderRadius: "10px",
            border: "1px solid #ccc",
          }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          style={{
            padding: "0.7rem",
            borderRadius: "10px",
            border: "1px solid #ccc",
          }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          style={{
            background: "#c24914",
            color: "#fff",
            border: "none",
            borderRadius: "18px",
            padding: "0.8rem 2rem",
            fontWeight: "bold",
            fontSize: "1.1rem",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
      <div style={{ marginTop: "1rem", fontSize: "0.95rem" }}>
        <a
          href="/signup"
          style={{ color: "#c24914", textDecoration: "underline" }}
        >
          Don’t have an account? Sign Up
        </a>
      </div>
    </main>
  );
}

export default LoginPage;
