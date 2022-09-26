import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
      <Link to="product">Products</Link>
    </nav>
  );
};

export default Navbar;
