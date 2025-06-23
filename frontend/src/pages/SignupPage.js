import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    if (image) formData.append("image", image);

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        navigate("/login");
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
        Sign Up
      </h2>
      {error && (
        <div style={{ color: "red", marginBottom: "1rem" }}>{error}</div>
      )}
      <form
        onSubmit={handleSignup}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem",
          marginTop: "1.4rem",
        }}
        encType="multipart/form-data"
      >
        <input
          type="text"
          placeholder="Name"
          style={{
            padding: "0.7rem",
            borderRadius: "10px",
            border: "1px solid #ccc",
          }}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
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
          Sign Up
        </button>
      </form>
      <div style={{ marginTop: "1rem", fontSize: "0.95rem" }}>
        <a
          href="/login"
          style={{ color: "#c24914", textDecoration: "underline" }}
        >
          Already have an account? Login
        </a>
      </div>
    </main>
  );
}

export default SignupPage;
