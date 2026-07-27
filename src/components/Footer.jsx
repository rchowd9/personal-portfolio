import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Riasat Chowdhury. All rights reserved.</p>
      
      <div className="footer-links">
        <a href="mailto:your-email@example.com" aria-label="Email">
          <FaEnvelope /> Email
        </a>
        <a href="https://github.com/your-username" target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub /> GitHub
        </a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin /> LinkedIn
        </a>
      </div>
    </footer>
  );
}