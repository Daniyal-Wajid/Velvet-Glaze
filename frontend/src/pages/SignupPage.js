import React from "react";

function SignupPage() {
  return (
    <main style={{ maxWidth: "400px", margin: "3rem auto", background: "#fff", borderRadius: "16px", padding: "2rem", boxShadow: "0 2px 12px #c2491420" }}>
      <h2 style={{ color: "#c24914", fontFamily: "'Fredoka One', cursive" }}>Sign Up</h2>
      <form style={{ display: "flex", flexDirection: "column", gap: "1.2rem", marginTop: "1.4rem" }}>
        <input type="text" placeholder="Name" style={{ padding: "0.7rem", borderRadius: "10px", border: "1px solid #ccc" }} required />
        <input type="email" placeholder="Email" style={{ padding: "0.7rem", borderRadius: "10px", border: "1px solid #ccc" }} required />
        <input type="password" placeholder="Password" style={{ padding: "0.7rem", borderRadius: "10px", border: "1px solid #ccc" }} required />
        <button type="submit" style={{ background: "#c24914", color: "#fff", border: "none", borderRadius: "18px", padding: "0.8rem 2rem", fontWeight: "bold", fontSize: "1.1rem", cursor: "pointer" }}>Sign Up</button>
      </form>
      <div style={{ marginTop: "1rem", fontSize: "0.95rem" }}>
        <a href="/login" style={{ color: "#c24914", textDecoration: "underline" }}>Already have an account? Login</a>
      </div>
    </main>
  );
}

export default SignupPage;