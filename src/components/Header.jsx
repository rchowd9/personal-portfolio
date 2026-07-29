// src/components/Header.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/education", label: "Education" },
  { to: "/activities", label: "Activities" },
  { to: "/contact", label: "Contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-brand">
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          Riasat Chowdhury
        </NavLink>
      </div>

      <button
        type="button"
        className="nav-toggle"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`nav-links ${menuOpen ? "nav-links--open" : ""}`}>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => (isActive ? "nav-link nav-link--active" : "nav-link")}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;