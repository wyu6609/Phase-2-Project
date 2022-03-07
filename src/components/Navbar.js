import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavbarStyles.css";
import "./Navbar";
const Navbar = () => {
  //hamburger state
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/SearchRecipe" className="nav-link">
              Search A Recipe
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/" className="nav-link">
              Your Favorites
            </Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#6ce5e8" }} />
          ) : (
            <FaBars size={20} style={{ color: "#6ce5e8" }} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
