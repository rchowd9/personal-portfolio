import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Riasat Chowdhury</p>
      <div className="social-links">
        <a href="mailto:chowdhuryriasat078@gmail.com">Email</a>
        <a
          href="https://github.com/rchowd9"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/riasat-chowdhury-0a1232336/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
