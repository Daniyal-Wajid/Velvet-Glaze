import React from "react";

function AdminPage() {
  return (
    <main style={{ maxWidth: "900px", margin: "2.5rem auto", background: "#fff", borderRadius: "16px", padding: "2rem", boxShadow: "0 2px 12px #c2491420" }}>
      <h2 style={{ color: "#c24914", fontFamily: "'Fredoka One', cursive" }}>Admin Dashboard</h2>
      <ul>
        <li>Manage products (add/edit/delete donuts, categories)</li>
        <li>Manage orders (view, update status, refund/cancel)</li>
        <li>View analytics (sales, popular products, etc.)</li>
        <li>Manage users (view, block, reset passwords)</li>
        <li>Update homepage banners, offers, and blog posts</li>
        <li>Manage FAQs & promo codes</li>
      </ul>
      <p>(UI only – ready for backend integration!)</p>
    </main>
  );
}

export default AdminPage;