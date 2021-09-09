import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
function Navbar() {
  const navStyle = {
    color: "white",
  };
  return (
    <nav className="navbar">
      <h2 className="nav-brand text-center mx-auto">Shopping Cart</h2>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/Cart">
          <li>
            <FaShoppingCart /> 0
          </li>
        </Link>
      </ul>
    </nav>
  );
}
export default Navbar;
