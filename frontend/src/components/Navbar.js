import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    // Optional: also remove user info, etc.
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="brand">
          Velvet Glaze
        </Link>
      </div>

      <ul className="navbar-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/offers">Offers</Link>
        </li>
        <li>
          <Link to="/store-locator">Store Locator</Link>
        </li>

        {!token ? (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        ) : (
          <li>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </li>
        )}
      </ul>

      <div className="navbar-actions">
        <Link to="/search">
          <FaSearch />
        </Link>

        <Link to="/profile">
          <FaUser />
        </Link>
        <Link to="/cart">
          <FaShoppingCart />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
