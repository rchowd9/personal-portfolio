import React from "react";

export default function ProjectCard({
  title,
  description,
  tech = [],
  liveUrl,
  repoUrl,
  link,
}) {
  const projectLink = liveUrl || link;

  return (
    <article className="project-card">
      <div className="project-card__content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tags">
          {tech.map((item) => (
            <span key={item} className="project-tag">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="project-links">
        {repoUrl ? (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link project-link--secondary"
          >
            Repository
          </a>
        ) : null}
        {projectLink ? (
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link project-link--primary"
          >
            Live Demo
          </a>
        ) : null}
      </div>
    </article>
  );
}
