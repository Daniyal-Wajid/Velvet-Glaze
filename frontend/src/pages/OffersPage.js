import React from "react";

function OffersPage() {
  return (
    <main style={{ maxWidth: "700px", margin: "2.5rem auto", background: "#fff", borderRadius: "16px", padding: "2rem", boxShadow: "0 2px 12px #c2491420" }}>
      <h2 style={{ color: "#c24914", fontFamily: "'Fredoka One', cursive" }}>Current Offers & Promotions</h2>
      <ul>
        <li>Sweet Deals Await – Up to 30% Off!</li>
        <li>Fresh Deals Daily – Grab your favorite donuts!</li>
        <li>Special discount for first-time customers.</li>
      </ul>
    </main>
  );
}

export default OffersPage;