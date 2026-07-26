import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Automation Tool",
      description: "CLI tool that automates data workflows.",
      tech: ["Python", "Docker"],
      link: "https://github.com/riasatchowdhury/automation-tool"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with React and Tailwind CSS.",
      tech: ["React", "Tailwind", "Vercel"],
      link: "https://riasat.dev"
    }
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      {projects.map((p, i) => (
        <ProjectCard key={i} {...p} />
      ))}
    </section>
  );
}
