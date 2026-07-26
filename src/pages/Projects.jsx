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
      <p>
        A React + Spring Boot dashboard that monitors CI/CD pipeline health and
        sends real-time alerts for failing deployments. By integrating GitHub
        Actions with a REST API, it helped teams detect and resolve delivery
        issues 60% faster.
      </p>

      <h3>
        <a
          href="https://major-roast-b107bbce.base44.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rate My Major
        </a>
      </h3>
      <p>
        An AI-powered platform built with Python, React, and PostgreSQL that
        analyzes academic majors to provide salary insights and industry trends.
        The backend stores 15+ attributes per major, enabling fast and structured
        data retrieval.
      </p>

      <h3>
        <a
          href="https://toq2gn.jdoodle.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          AI Maze Simulation
        </a>
      </h3>
      <p>
        An interactive maze game created with JavaScript and React that uses AI
        to deliver dynamic, context-aware hints based on player movement. A
        visualization dashboard predicts player success patterns with 85%
        accuracy.
      </p>
    </section>
  );
}
