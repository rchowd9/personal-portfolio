import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Riasat Chowdhury</p>
      <div className="social-links">
        <a href="mailto:your-email@example.com">Email</a>
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}