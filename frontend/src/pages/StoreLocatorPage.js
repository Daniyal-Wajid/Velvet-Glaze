import React from "react";

function StoreLocatorPage() {
  return (
    <main style={{ maxWidth: "700px", margin: "2.5rem auto", background: "#fff", borderRadius: "16px", padding: "2rem", boxShadow: "0 2px 12px #c2491420" }}>
      <h2 style={{ color: "#c24914", fontFamily: "'Fredoka One', cursive" }}>Store Locator</h2>
      <p>Find Velvet Glaze stores near you:</p>
      <ul>
        <li>DHA 2, Islamabad – Open 9am to 11pm</li>
        <li>Coming soon: Giga Mall, Islamabad</li>
      </ul>
      <p style={{ marginTop: "2rem" }}>
        <b>Delivery Area Check:</b> <br />
        Enter your area or postcode to see if we deliver to you. (Feature coming soon!)
      </p>
    </main>
  );
}

export default StoreLocatorPage;