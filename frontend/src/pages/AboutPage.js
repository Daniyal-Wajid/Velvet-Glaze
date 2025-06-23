import React from "react";

function AboutPage() {
  return (
    <main
      style={{
        maxWidth: "900px",
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
          fontSize: "2.2rem",
          marginBottom: "1rem",
        }}
      >
        About Velvet Glaze
      </h2>

      <section style={{ marginBottom: "2rem" }}>
        <p>
          Velvet Glaze is your cozy corner for handcrafted, mouthwatering
          doughnuts made with love. Whether you're into classic glazed rings,
          chocolate-filled surprises, or vegan-friendly options, we’ve got your
          sweet cravings covered!
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h3 style={{ color: "#c24914" }}>🎨 Crafted with Passion</h3>
        <p>
          Every donut is handmade fresh each morning, with rich fillings,
          artisan toppings, and a whole lot of flair. From the moment you step
          in, you’ll smell sweetness in the air and taste joy in every bite.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h3 style={{ color: "#c24914" }}>🌱 Vegan & Inclusive Options</h3>
        <p>
          We bake with everyone in mind! Our vegan doughnuts are just as
          delightful as the originals — made without any dairy or eggs but
          overflowing with flavor.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h3 style={{ color: "#c24914" }}>📍 Locally Made, Community Loved</h3>
        <p>
          Proudly rooted in your city, Velvet Glaze supports local farmers and
          suppliers. We love our community — and they love us back, one donut at
          a time.
        </p>
      </section>

      <section style={{ marginBottom: "1rem", textAlign: "center" }}>
        <h3 style={{ color: "#c24914" }}>❤️ Happy Customers, Sweet Moments</h3>
        <p>
          Our customers are at the heart of everything we do. Their smiles,
          stories, and feedback inspire us to glaze even better every single
          day.
        </p>
      </section>
    </main>
  );
}

export default AboutPage;
