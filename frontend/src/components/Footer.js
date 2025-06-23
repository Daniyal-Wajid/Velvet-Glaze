import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaSearch } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <h3>Velvet Glaze</h3>
          <p>Sweet Donut Shop in Your City</p>
          <p>
            <b>Contact:</b> +92-300-1234567<br />
            <b>Email:</b> info@velvetglaze.com
          </p>
        </div>
        <div>
          <h4>Follow Us</h4>
          <div className="footer-social">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
        <div>
          <h4>Search</h4>
          <div className="footer-searchBar">
            <input placeholder="Search..." />
            <button><FaSearch /></button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Velvet Glaze. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;