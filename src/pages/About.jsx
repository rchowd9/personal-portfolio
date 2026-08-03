import React from "react";
import { FaBicycle, FaGamepad, FaTableTennis, FaCode, FaGraduationCap } from "react-icons/fa";

export default function About() {
  const hobbies = [
    { name: "Bike Riding", icon: <FaBicycle color="#38bdf8" /> },
    { name: "Badminton", icon: <FaTableTennis color="#f59e0b" /> },
    { name: "Video Games", icon: <FaGamepad color="#a855f7" /> },
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-heading">
        <p className="section-kicker">Get to know me</p>
        <h2>About Me</h2>
      </div>

      <div className="about-grid">
        {/* Left Side: Profile Image */}
        <div className="about-image-container">
          <img
            src="/profile.jpg"
            alt="Riasat Chowdhury"
            className="about-image"
          />
        </div>

        {/* Right Side: Narrative Bio */}
        <div className="about-text-content">
          <p className="about-bio">
            Hi! I'm a Computer Science student passionate about building practical software that solves real-world problems. Whether it's streamlining manual data operations with Python automation or crafting modern web applications, I enjoy taking projects from an initial idea to a reliable, user-friendly product.
          </p>

          <p className="about-bio">
            I love exploring full-stack engineering, cloud technologies, and developer tools. Beyond writing clean code, I'm constantly learning new frameworks and staying curious about modern AI-driven developer tooling.
          </p>

          {/* Quick Snapshot Badges */}
          <div className="about-snapshots">
            <div className="snapshot-card">
              <FaGraduationCap className="snap-icon" />
              <div>
                <strong>CS Student</strong>
                <span>SUNY Old Westbury</span>
              </div>
            </div>
            <div className="snapshot-card">
              <FaCode className="snap-icon" />
              <div>
                <strong>Full-Stack</strong>
                <span>React, Node & Cloud</span>
              </div>
            </div>
          </div>

          {/* Hobbies & Personal Side */}
          <div className="hobbies-container">
            <h4>When I'm not coding:</h4>
            <div className="hobbies-grid">
              {hobbies.map((hobby, idx) => (
                <div key={idx} className="hobby-chip">
                  <span className="hobby-icon">{hobby.icon}</span>
                  <span>{hobby.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}