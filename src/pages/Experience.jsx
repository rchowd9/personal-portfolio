import React from "react";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      company: "Qualtrics",
      role: "Data Optimizer",
      duration: "Jul 2025 – Dec 2025",
      location: "New York City, NY",
      achievements: [
        "Automated mobile campaign data validation using Python, achieving 100% accuracy.",
        "Built audit tools correcting 50+ technical errors per month for enterprise clients.",
        "Increased task processing speed by 25% with script‑driven verification of 100+ concurrent tasks.",
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="section-heading">
        <p className="section-kicker">Career Journey</p>
        <h2>Professional Experience</h2>
        <p className="section-description">
          Roles and projects that strengthened my technical foundation and problem‑solving approach.
        </p>
      </div>

      <div className="experience-grid">
        {experiences.map((exp) => (
          <div key={exp.company} className="experience-card">
            <div className="card-header">
              <span className="cat-icon"><FaBriefcase color="#38bdf8" /></span>
              <h3>{exp.company} — {exp.role}</h3>
            </div>
            <p className="experience-meta">
              {exp.duration} | {exp.location}
            </p>
            <ul className="experience-list">
              {exp.achievements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
