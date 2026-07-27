import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <p className="hero-kicker"> 👋 Welcome to my site</p>
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Riasat Chowdhury</span>
        </h1>
        <h2 className="hero-subtitle">
          Full-Stack Developer specializing in automation & cloud solutions.
        </h2>
        <p className="hero-description">
          Computer Science student at SUNY Old Westbury crafting scalable web applications, 
          cloud infrastructure, and seamless developer workflows.
        </p>

        {/* Buttons */}
        <div className="hero-cta-group">
          <a href="/projects" className="btn btn-primary">
            View Projects <FaArrowRight />
          </a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-secondary">
            <FaFileDownload /> Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="hero-socials">
          <a href="https://github.com/your-username" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:your-email@example.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}