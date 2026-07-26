import React from "react";
import profilePic from "../assets/profile.jpg"; // image stays in src/assets

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <img
          src={profilePic}
          alt="Riasat Chowdhury"
          className="profile-photo"
        />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Computer Science student with a 3.76 GPA and hands‑on experience in
            full‑stack development, automation, and cloud technologies. At
            Qualtrics, I replaced manual workflows with Python‑based automation
            that improved accuracy, speed, and reliability across large‑scale
            data operations. Passionate about building practical, user‑focused
            software using modern web frameworks and AI‑driven tools.
          </p>

          {/* Resume Button */}
          <a
            href="/Riasat_Chowdhury_Resume.pdf"
            className="resume-btn"
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
