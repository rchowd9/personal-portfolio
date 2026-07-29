import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaArrowRight } from "react-icons/fa";

export default function Home() {
  const resumeUrl = `${import.meta.env.BASE_URL}Riasat_Chowdhury_Resume.pdf`;

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

        <div className="hero-cta-group">
          <Link to="/projects" className="btn btn-primary">
            View Projects <FaArrowRight />
          </Link>
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <FaFileDownload /> Resume
          </a>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/rchowd9" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/riasat-chowdhury-0a1232336/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:chowdhuryriasat078@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}