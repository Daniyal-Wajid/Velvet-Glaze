import React from "react";

function StoreLocatorPage() {
  return (
    <main
      style={{
        maxWidth: "850px",
        margin: "2.5rem auto",
        background: "#fff",
        borderRadius: "16px",
        padding: "2rem",
        boxShadow: "0 2px 12px #c2491420",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h2
        style={{
          color: "#c24914",
          fontFamily: "'Fredoka One', cursive",
          fontSize: "2rem",
          marginBottom: "1rem",
        }}
      >
        🍩 Store Locator
      </h2>

      <section style={{ marginBottom: "2rem" }}>
        <p>
          Find your nearest Velvet Glaze outlet and drop in for a fresh bite!
        </p>
        <ul style={{ paddingLeft: "1.5rem", marginTop: "1rem" }}>
          <li>
            <strong>DHA Phase 2, Islamabad</strong> – Open daily from 9:00 AM to
            11:00 PM
          </li>
          <li>
            <strong>Coming Soon:</strong> Giga Mall, Islamabad – Grand Opening
            this Fall!
          </li>
          <li>
            <strong>F-7 Markaz (Coming Soon)</strong> – Cozy new outlet under
            construction
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h3 style={{ color: "#c24914" }}>📍 View Our Map</h3>
        <p>
          Easily locate our stores using our interactive map below. (Feature in
          progress!)
        </p>
        <div
          style={{
            background: "#eee",
            height: "300px",
            borderRadius: "12px",
            marginTop: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#888",
          }}
        >
          Map Integration Coming Soon...
        </div>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h3 style={{ color: "#c24914" }}>🚚 Delivery Availability</h3>
        <p>Check if we deliver to your area:</p>
        <input
          type="text"
          placeholder="Enter your area or postcode"
          style={{
            padding: "0.7rem",
            width: "100%",
            border: "1px solid #ccc",
            borderRadius: "10px",
            marginTop: "0.5rem",
          }}
          disabled
        />
        <p style={{ fontSize: "0.9rem", marginTop: "0.5rem", color: "#888" }}>
          Feature launching soon. Stay tuned!
        </p>
      </section>

      <section style={{ marginBottom: "1rem" }}>
        <h3 style={{ color: "#c24914" }}>📞 Contact & Support</h3>
        <p>Have questions or want to place a special order? Reach out to us:</p>
        <ul style={{ paddingLeft: "1.5rem" }}>
          <li>
            Email:{" "}
            <a href="mailto:support@velvetglaze.com">support@velvetglaze.com</a>
          </li>
          <li>
            Phone: <a href="tel:+923001234567">+92 300 1234567</a>
          </li>
          <li>
            Instagram:{" "}
            <a
              href="https://instagram.com/velvetglaze"
              target="_blank"
              rel="noreferrer"
            >
              @velvetglaze
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default StoreLocatorPage;
