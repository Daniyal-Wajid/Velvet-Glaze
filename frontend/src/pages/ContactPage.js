import React from "react";

function ContactPage() {
  return (
    <main style={{ maxWidth: "700px", margin: "2.5rem auto", background: "#fff", borderRadius: "16px", padding: "2rem", boxShadow: "0 2px 12px #c2491420" }}>
      <h2 style={{ color: "#c24914", fontFamily: "'Fredoka One', cursive" }}>Contact Us</h2>
      <p>
        Have a question, feedback, or want to place a corporate order?
      </p>
      <form style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1.5rem" }}>
        <input type="text" placeholder="Your Name" style={{ padding: "0.7rem", borderRadius: "10px", border: "1px solid #ccc" }} required />
        <input type="email" placeholder="Your Email" style={{ padding: "0.7rem", borderRadius: "10px", border: "1px solid #ccc" }} required />
        <textarea placeholder="Your Message" rows={5} style={{ padding: "0.7rem", borderRadius: "10px", border: "1px solid #ccc" }} required />
        <button type="submit" style={{ background: "#c24914", color: "#fff", border: "none", borderRadius: "18px", padding: "0.8rem 2rem", fontWeight: "bold", fontSize: "1.1rem", cursor: "pointer" }}>Send</button>
      </form>
      <div style={{ marginTop: "2rem", color: "#6f4e37" }}>
        <p><b>Email:</b> info@velvetglaze.com</p>
        <p><b>Phone:</b> +92-300-1234567</p>
        <p><b>Address:</b> DHA 2, Islamabad</p>
      </div>
    </main>
  );
}

export default ContactPage;