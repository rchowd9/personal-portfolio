import React from "react";
import { FaGraduationCap, FaAward, FaBookOpen } from "react-icons/fa";

export default function Education() {
  const deansListTerms = ["Fall 2023", "Fall 2024", "Spring 2025", "Fall 2025"];
  
  const coursework = [
    "Data Structures & Algorithms",
    "Computer Architecture",
    "Database Systems",
    "Software Engineering",
    "Linear Algebra",
    "Internet & Web Technology",
    "Probability & Statistics",
    "Artificial Intelligence",
    "Machine Learning",
  ];

  return (
    <section className="education-section">
      <div className="section-heading">
        <p className="section-kicker">Academic Background</p>
        <h2>Education</h2>
        <p className="section-description">
          My formal computer science foundation, academic achievements, and core coursework.
        </p>
      </div>

      <div className="education-card">
        {/* Header with School & Degree */}
        <div className="edu-header">
          <div className="edu-title-group">
            <span className="edu-icon"><FaGraduationCap /></span>
            <div>
              <h3>SUNY Old Westbury</h3>
              <p className="degree">Bachelor of Science in Computer Science</p>
            </div>
          </div>
          <span className="edu-date">Expected May 2027</span>
        </div>

        {/* GPA & Honors */}
        <div className="edu-stats">
          <div className="stat-badge gpa">
            <span className="stat-label">GPA</span>
            <span className="stat-value">3.76 / 4.0</span>
          </div>

          <div className="deans-list-container">
            <div className="deans-list-title">
              <FaAward color="#f59e0b" />
              <span>Dean's List Honors:</span>
            </div>
            <div className="honor-tags">
              {deansListTerms.map((term, idx) => (
                <span key={idx} className="honor-tag">{term}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Coursework */}
        <div className="coursework-section">
          <h4>
            <FaBookOpen className="course-icon" /> Relevant Coursework
          </h4>
          <div className="course-tags">
            {coursework.map((course, idx) => (
              <span key={idx} className="course-tag">{course}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}