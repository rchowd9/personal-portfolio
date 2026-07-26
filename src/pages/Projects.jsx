import React from "react";

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>

      <h3>
        <a
          href="https://ci-cd-pipeliner-nlfx.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CI/CD Viz
        </a>
      </h3>
      <p>React, Spring Boot, Supabase, GitHub Actions | Sep 2025 – Nov 2025</p>
      <ul>
        <li>Built a deployment monitoring dashboard with real-time alerts for failing updates.</li>
        <li>Integrated GitHub Actions with REST API, reducing delivery issue resolution time by 60%.</li>
      </ul>

      <h3>
        <a
          href="https://major-roast-b107bbce.base44.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rate My Major
        </a>
      </h3>
      <p>Python, React, PostgreSQL, OpenAI | Nov 2025 – Dec 2025</p>
      <ul>
        <li>Developed AI-powered platform analyzing 12+ majors for salary insights and industry trends.</li>
        <li>Designed Python backend with relational database storing 15+ attributes per major.</li>
      </ul>

      <h3>
        <a
          href="https://toq2gn.jdoodle.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          AI Maze Simulation
        </a>
      </h3>
      <p>JavaScript, React, OpenAI | Mar 2025 – May 2025</p>
      <ul>
        <li>Created interactive maze game with AI-driven hints based on player movement.</li>
        <li>Built visualization dashboard predicting player success patterns with 85% accuracy.</li>
      </ul>
    </section>
  );
}
