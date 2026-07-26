import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">

      <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/about">About</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/education">Education</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}