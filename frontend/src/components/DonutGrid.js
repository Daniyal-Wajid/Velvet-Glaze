import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/DonutGrid.css";

function DonutGrid(props) {
  const { category: propCategory, featured = false } = props;
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const urlCategory = queryParams.get("category");
  const [search, setSearch] = useState("");
  const [donuts, setDonuts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDonuts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/donuts");
        setDonuts(res.data);

        // Initialize quantity to 1 for each donut
        const initialQuantities = {};
        res.data.forEach((donut) => {
          initialQuantities[donut._id] = 1;
        });
        setQuantities(initialQuantities);
      } catch (err) {
        console.error("Error fetching donuts:", err);
      }
    };

    fetchDonuts();
  }, []);

  const handleAddToCart = async (e, donutId) => {
    e.preventDefault();
    e.stopPropagation();

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login to add items to your cart.");
      return navigate("/login");
    }

    try {
      await axios.post(
        "http://localhost:5000/api/cart/add-to-cart",
        {
          donutId,
          quantity: quantities[donutId] || 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Added to cart!");
    } catch (err) {
      console.error("Add to cart error:", err);
      alert("Could not add to cart.");
    }
  };

  const increaseQty = (e, donutId) => {
    e.preventDefault();
    e.stopPropagation();
    setQuantities((prev) => ({
      ...prev,
      [donutId]: (prev[donutId] || 1) + 1,
    }));
  };

  const decreaseQty = (e, donutId) => {
    e.preventDefault();
    e.stopPropagation();
    setQuantities((prev) => ({
      ...prev,
      [donutId]: Math.max(1, (prev[donutId] || 1) - 1),
    }));
  };

  let list = donuts.filter(
    (d) =>
      (!propCategory || d.category === propCategory) &&
      (!urlCategory || d.category === urlCategory) &&
      (!featured || d.isFeatured) &&
      d.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!propCategory && !urlCategory) {
    list = donuts.filter(
      (d) =>
        (!featured || d.isFeatured) &&
        d.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div className="donutGrid">
      <div className="donutGrid-searchBar">
        <input
          placeholder="Search donuts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="donutGrid-grid">
        {list.map((donut) => (
          <Link
            to={`/menu/${donut._id}`}
            key={donut._id}
            className="donutGrid-card"
          >
            <img
              src={`http://localhost:5000/uploads/${donut.image}`}
              alt={donut.name}
            />
            <div className="donutGrid-info">
              <h3>{donut.name}</h3>
              <p className="donutGrid-price">
                Rs. {Number(donut.price).toFixed(2)}
              </p>

              {/* Quantity controls */}
              <div className="donutGrid-qty-controls">
                <button onClick={(e) => decreaseQty(e, donut._id)}>-</button>
                <span>{quantities[donut._id] || 1}</span>
                <button onClick={(e) => increaseQty(e, donut._id)}>+</button>
              </div>

              <button
                className="donutGrid-addBtn"
                onClick={(e) => handleAddToCart(e, donut._id)}
              >
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DonutGrid;
