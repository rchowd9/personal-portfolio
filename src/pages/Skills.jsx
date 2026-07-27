import React from "react";

// Simple Icons (Languages, Frameworks, Tools)
import {
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiPython,
  SiHtml5,
  SiCss,
  SiPhp,
  SiGo,
  SiReact,
  SiNodedotjs,
  SiSpringboot,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiSupabase,
  SiGooglecloud,
  SiGit,
  SiDocker,
  SiEclipseide,
  SiIntellijidea,
  SiPycharm,
  SiXampp,
  SiRailway,
  SiVercel,
} from "react-icons/si";

// VS Code Icons (dedicated VS Code icon set)
import { VscVscode } from "react-icons/vsc";

// Font Awesome Icons
import {
  FaCertificate,
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaAws,
  FaJava,
  FaCloud,
  FaLaptopCode,
} from "react-icons/fa";

const skillCategories = [
  {
    category: "Languages",
    icon: <FaCode />,
    skills: [
      { name: "JavaScript", icon: <SiJavascript color="#f7df1e" /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178c6" /> },
      { name: "Java", icon: <FaJava color="#007396" /> },
      { name: "C++", icon: <SiCplusplus color="#00599c" /> },
      { name: "Python", icon: <SiPython color="#3776ab" /> },
      { name: "HTML", icon: <SiHtml5 color="#e34f26" /> },
      { name: "CSS", icon: <SiCss color="#2965f1" /> },
      { name: "PHP", icon: <SiPhp color="#777bb4" /> },
      { name: "Go", icon: <SiGo color="#00add8" /> },
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: <FaServer />,
    skills: [
      { name: "React", icon: <SiReact color="#61dafb" /> },
      { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
      { name: "Spring Boot", icon: <SiSpringboot color="#6db33f" /> },
      { name: "Express.js", icon: <SiExpress color="#e5e7eb" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#06b6d4" /> },
    ],
  },
  {
    category: "Databases & Cloud",
    icon: <FaDatabase />,
    skills: [
      { name: "MySQL", icon: <SiMysql color="#4479a1" /> },
      { name: "MongoDB", icon: <SiMongodb color="#47a248" /> },
      { name: "Supabase", icon: <SiSupabase color="#3ecf8e" /> },
      { name: "AWS", icon: <FaAws color="#ff9900" /> },
      { name: "Google Cloud", icon: <SiGooglecloud color="#4285f4" /> },
    ],
  },
  {
    category: "Developer Tools",
    icon: <FaTools />,
    skills: [
      { name: "Git", icon: <SiGit color="#f05032" /> },
      { name: "Docker", icon: <SiDocker color="#2496ed" /> },
    ],
  },
  {
    category: "IDEs & Editors",
    icon: <FaLaptopCode />,
    skills: [
      { name: "VS Code", icon: <VscVscode color="#007acc" /> },
      { name: "IntelliJ IDEA", icon: <SiIntellijidea color="#fe315d" /> },
      { name: "PyCharm", icon: <SiPycharm color="#21d789" /> },
      { name: "Eclipse", icon: <SiEclipseide color="#2c2255" /> },
    ],
  },
  {
    category: "Servers & Deployment",
    icon: <FaCloud />,
    skills: [
      { name: "XAMPP", icon: <SiXampp color="#fb7a24" /> },
      { name: "Railway", icon: <SiRailway color="#0b0d0e" /> },
      { name: "Vercel", icon: <SiVercel color="#000000" /> },
    ],
  },
];

const certifications = [
  "Google Cloud Fundamentals (Jul 2025)",
  "Intro to Technical Interview Prep (Apr 2026)",
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-heading">
        <p className="section-kicker">Tech Stack</p>
        <h2>Technical Skills</h2>
        <p className="section-description">
          Technologies, tools, and platforms I work with to build full‑stack web applications.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {skillCategories.map((cat) => (
          <div key={cat.category} className="skills-card">
            <div className="card-header">
              <span className="cat-icon">{cat.icon}</span>
              <h3>{cat.category}</h3>
            </div>

            <div className="badges-wrapper">
              {cat.skills.map((skill) => (
                <div key={skill.name} className="skill-badge">
                  <span className="skill-icon" aria-label={skill.name}>
                    {skill.icon}
                  </span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="certifications-card">
        <div className="card-header">
          <span className="cat-icon">
            <FaCertificate color="#f59e0b" />
          </span>
          <h3>Certifications</h3>
        </div>

        <ul className="cert-list">
          {certifications.map((cert) => (
            <li key={cert}>{cert}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
 