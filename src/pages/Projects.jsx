import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "CI/CD Viz",
      description:
        "A React and Spring Boot dashboard that tracks pipeline health, highlights failures quickly, and supports faster incident response across delivery teams.",
      tech: ["React", "Spring Boot", "GitHub Actions"],
      liveUrl: "https://ci-cd-pipeliner-nlfx.vercel.app/",
      repoUrl: "https://github.com/rchowd9/CI-CD-Viz"
    },
    {
      title: "In-Browser Local RAG Engine",
      description:
        "A privacy-first, 100% client-side Retrieval-Augmented Generation application that embeds and searches documents locally in the browser using Web Workers and Hugging Face Transformers.js.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Transformers.js", "Vite"],
      liveUrl: "https://rchowd9.github.io/browser-rags-app/",
      repoUrl: "https://github.com/rchowd9/browser-rags-app",
},
    {
      title: "Rate My Major",
      description:
        "An AI-informed platform that compares majors with salary and career insight data, helping students make more confident academic decisions.",
      tech: ["Python", "React", "JavaScript", "Recharts"],
      liveUrl: "https://major-roast-b107bbce.base44.app/",
    },
    {
      title: "AI Maze Simulation",
      description:
        "An interactive maze experience that adapts hints in real time and uses behavioral analytics to improve the player journey.",
      tech: ["JavaScript", "React", "Web3", "Open AI API"],
      liveUrl: "https://toq2gn.jdoodle.io/",
      repoUrl: "https://github.com/rchowd9/AI-MazeGame",
    },
    {
      title: "Pokemon Battle Simulator",
      description:
        "A turn-based battle application simulating move mechanics, stat calculations, and tactical play.",
      tech: ["React", "Node.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://pkmn-battle-simulator.vercel.app/",
      repoUrl: "https://github.com/rchowd9/pkmnBattleSimulator",
    },

    {
      title: "Railway System",
      description:
        "A lightweight, polyglot demo engineered to simulate and visualize a real-time MTA transit feed. It showcases cross-language integration, dynamic route status updates, and real-time data processing to mirror a live subway tracking experience.",
      tech: ["PHP", "Go", "Redis", "Python"],
      repoUrl: "https://github.com/rchowd9/railway-system",
    },
  ];

  return (
    <section className="projects-section">
      <div className="section-heading">
        <p className="section-kicker">Selected work</p>
        <h2>Projects</h2>
        <p className="section-description">
          These projects reflect my focus on practical product building, thoughtful UX,
          and reliable delivery experiences.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
