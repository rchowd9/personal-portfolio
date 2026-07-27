import React from "react";
import { FaLaptopCode, FaCode, FaCalendarAlt, FaUsers } from "react-icons/fa";

export default function Activities() {
  const activities = [
    {
      role: "Web Developer",
      organization: "Business & Computer Club",
      period: "Feb 2025 – May 2025",
      description: "Led development of the club's official website, establishing a modern online presence.",
      icon: <FaLaptopCode />,
    },
    {
      role: "Member",
      organization: "Coding Club",
      period: "Sep 2023 – Present",
      description: "Participated in weekly algorithmic problem-solving sessions with 10+ peers.",
      icon: <FaCode />,
    },
  ];

  return (
    <section id="activities" className="activities-section">
      <div className="section-heading">
        <p className="section-kicker">Leadership & Extracurriculars</p>
        <h2>Activities</h2>
        <p className="section-description">
          Clubs, campus organizations, and community involvement.
        </p>
      </div>

      <div className="activities-grid">
        {activities.map((item, idx) => (
          <div key={idx} className="activity-card">
            <div className="card-header">
              <span className="cat-icon">{item.icon}</span>
              <div>
                <h3>{item.organization}</h3>
                <p className="activity-role">{item.role}</p>
              </div>
            </div>

            <div className="activity-date-badge">
              <FaCalendarAlt size={12} color="#38bdf8" /> {item.period}
            </div>

            <p className="activity-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}