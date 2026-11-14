import React, { useMemo, useState } from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "CI/CD Viz",
      description:
        "A React and Spring Boot dashboard that tracks pipeline health, highlights failures quickly, and supports faster incident response across delivery teams.",
      tech: ["React", "Spring Boot", "GitHub Actions"],
      featured: true,
      liveUrl: "https://ci-cd-pipeliner-nlfx.vercel.app/",
      repoUrl: "https://github.com/rchowd9/CI-CD-Viz",
    },
    {
      title: "In-Browser Local RAG Engine",
      description:
        "A privacy-first, 100% client-side Retrieval-Augmented Generation application that embeds and searches documents locally in the browser using Web Workers and Hugging Face Transformers.js.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Transformers.js", "Vite"],
      featured: true,
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
      title: "Railway System",
      description:
        "A lightweight, polyglot demo engineered to simulate and visualize a real-time MTA transit feed. It showcases cross-language integration, dynamic route status updates, and real-time data processing to mirror a live subway tracking experience.",
      tech: ["PHP", "Go", "Redis", "Python"],
      repoUrl: "https://github.com/rchowd9/railway-system",
    },

    {
      title: "Advanced Math Calculator",
      description:
        "A browser‑based calculator capable of performing advanced math operations including algebra, calculus, and matrix computations.",
      tech: ["HTML", "CSS", "JavaScript", "Plotly.js", "Math.js"],
      liveUrl: "https://rchowd9.github.io/AdvancedMathCalc/",
      repoUrl: "https://github.com/rchowd9/AdvancedMathCalc",
    },

    {
      title: "Code Quest Academy",
      description:
        "An interactive learning platform that teaches coding fundamentals through lessons, challenges, and gamified progress tracking.",
      tech: ["TypeScript", "CSS", "Next.js", "Hono", "Redis", "PostgreSQL"],
      liveUrl: "https://projec-dun-chi.vercel.app/", 
      repoUrl: "https://github.com/rchowd9/FullStackProj",
    },

    {
      title: "SIMD-Compute-Unit",
      description:
        "A hardware-level simulation modeling single-instruction multiple-data execution streams and vector register behavior.",
      tech: ["C++", "SystemVerilog","Python", "BatchFile", "Docker"],
      repoUrl: "https://github.com/rchowd9/SIMD-Compute-Unit", 
    },

    {
      title: "AlgoViz",
      description:
        "An interactive web application for visualizing sorting, pathfinding, and graph traversal algorithms in real time with step-by-step execution controls.",
      tech: ["Python", "TensorFlow", "Flask"],
      liveUrl: "https://algoviz-xkgtezddvb3m8nxjcqbwep.streamlit.app/", 
      repoUrl: "https://github.com/rchowd9/AlgoViz", 
    },

    {
      title: "MacroMind",
      description:
        "An interactive web application for visualizing sorting, pathfinding, and graph traversal algorithms in real time with step-by-step execution controls.",
      tech: ["Python", "Django"],
      liveUrl: "https://algoviz-xkgtezddvb3m8nxjcqbwep.streamlit.app/", 
      repoUrl: "https://github.com/rchowd9/MacroMind", 
    },
  ];    

  const [query, setQuery] = useState("");
  const [activeTech, setActiveTech] = useState("All");

  const technologies = useMemo(
    () => ["All", ...new Set(projects.flatMap((project) => project.tech))],
    [projects]
  );

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesTech = activeTech === "All" || project.tech.includes(activeTech);
      const matchesQuery = !normalizedQuery || [
        project.title,
        project.description,
        ...project.tech,
      ].join(" ").toLowerCase().includes(normalizedQuery);

      return matchesTech && matchesQuery;
    });
  }, [activeTech, projects, query]);

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

      <div className="projects-toolbar" aria-label="Filter projects">
        <label className="project-search">
          <span>Search projects</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try React, cloud, or game"
          />
        </label>
        <div className="project-filter-group" aria-label="Filter by technology">
          {technologies.map((technology) => (
            <button
              key={technology}
              type="button"
              className={`project-filter ${activeTech === technology ? "project-filter--active" : ""}`}
              onClick={() => setActiveTech(technology)}
              aria-pressed={activeTech === technology}
            >
              {technology}
            </button>
          ))}
        </div>
      </div>

      <p className="project-results" aria-live="polite">
        Showing {filteredProjects.length} of {projects.length} projects
      </p>

      {filteredProjects.length ? (
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      ) : (
        <div className="empty-projects">
          <h3>No matching projects</h3>
          <p>Try a different keyword or reset the technology filter.</p>
          <button
            type="button"
            className="btn-primary"
            onClick={() => {
              setQuery("");
              setActiveTech("All");
            }}
          >
            Reset filters
          </button>
        </div>
      )}
    </section>
  );
}
