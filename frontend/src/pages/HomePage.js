import React from "react";
import Banner from "../components/Banner";
import CategorySection from "../components/CategorySection";
import Featured from "../components/Featured";
import Reviews from "../components/Reviews";
import Newsletter from "../components/Newsletter";

function HomePage() {
  return (
    <main>
      <Banner />
      <CategorySection />
      <Featured />
      <Reviews />
      <Newsletter />
    </main>
  );
}

export default HomePage;