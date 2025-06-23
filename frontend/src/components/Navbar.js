import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="brand">Velvet Glaze</Link>
      </div>
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/offers">Offers</Link></li>
        <li><Link to="/store-locator">Store Locator</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
      <div className="navbar-actions">
        <Link to="/search"><FaSearch /></Link>
        <Link to="/profile"><FaUser /></Link>
        <Link to="/cart"><FaShoppingCart /></Link>
      </div>
    </nav>
  );
}

export default Navbar;