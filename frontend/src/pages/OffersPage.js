import React from "react";

function OffersPage() {
  return (
    <main
      style={{
        maxWidth: "800px",
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
          marginBottom: "1.5rem",
        }}
      >
        🍩 Current Offers & Promotions
      </h2>

      <section style={{ marginBottom: "2rem" }}>
        <h3 style={{ color: "#c24914" }}>🎉 Sweet Deals Await</h3>
        <ul style={{ paddingLeft: "1.5rem" }}>
          <li>Buy 6 donuts, get 2 free – Every Friday!</li>
          <li>Combo box of 12 assorted donuts – now 25% off.</li>
          <li>Enjoy a free drink with every dozen donuts!</li>
        </ul>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h3 style={{ color: "#c24914" }}>🆕 First-Time Customers</h3>
        <p>
          New here? We’re thrilled to have you! Use code{" "}
          <strong>WELCOME10</strong> at checkout and enjoy 10% off your first
          order.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h3 style={{ color: "#c24914" }}>🌟 Velvet Rewards Program</h3>
        <p>
          Join our free rewards program and earn points on every purchase.
          Redeem them for discounts, free donuts, exclusive merch, and more!
        </p>
        <ul style={{ paddingLeft: "1.5rem" }}>
          <li>Earn 1 point for every Rs.100 spent</li>
          <li>100 points = Rs.150 off</li>
          <li>Birthday month = Double points!</li>
        </ul>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h3 style={{ color: "#c24914" }}>🎁 Seasonal Specials</h3>
        <p>Celebrate the season with limited-edition flavors and discounts:</p>
        <ul style={{ paddingLeft: "1.5rem" }}>
          <li>Summer Strawberry Swirl – 15% off till August 31st</li>
          <li>Monsoon Choco Glaze – Combo deals available now!</li>
          <li>Check back every month for fresh flavors!</li>
        </ul>
      </section>

      <section style={{ marginBottom: "1rem" }}>
        <h3 style={{ color: "#c24914" }}>🤝 Refer & Earn</h3>
        <p>
          Share the donut love! Refer a friend and both of you get Rs.100 off
          your next order.
        </p>
        <p>
          Simply ask your friend to use your referral code during checkout. It’s
          that easy!
        </p>
      </section>
    </main>
  );
}

export default OffersPage;
