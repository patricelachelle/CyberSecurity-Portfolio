import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

const statusStyles: Record<Project["status"], string> = {
  Placeholder: "border-amber-300/50 bg-amber-100 text-amber-900",
  "In Progress": "border-sky-300/50 bg-sky-100 text-sky-900",
  Completed: "border-emerald-300/50 bg-emerald-100 text-emerald-900",
};

export function ProjectCard({ project }: ProjectCardProps) {
  const Icon = project.icon;

  return (
    <article className="project-card">
      <div className="project-card__header">
        <div className="project-card__icon" aria-hidden="true">
          <Icon size={22} strokeWidth={1.8} />
        </div>
        <span className={`status-pill ${statusStyles[project.status]}`}>
          {project.status}
        </span>
      </div>

      <p className="eyebrow">{project.category}</p>
      <h3>{project.title}</h3>
      <p className="project-card__summary">{project.shortDescription}</p>
      <p className="project-card__detail">{project.detailedDescription}</p>

      {project.screenshots?.length ? (
        <div className="project-card__screenshots" aria-label={`${project.title} screenshots`}>
          {project.screenshots.map((screenshot) => (
            <a href={screenshot.src} target="_blank" rel="noreferrer" key={screenshot.src}>
              <img src={screenshot.src} alt={screenshot.alt} loading="lazy" />
            </a>
          ))}
        </div>
      ) : null}

      <div className="tag-list" aria-label={`${project.title} tools`}>
        {project.tools.map((tool) => (
          <span key={tool}>{tool}</span>
        ))}
      </div>

      <div className="project-card__skills">
        <strong>Skills demonstrated</strong>
        <ul>
          {project.keySkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="project-card__links">
        {project.githubLink ? (
          <a href={project.githubLink} target="_blank" rel="noreferrer">
            <Github size={16} /> GitHub
          </a>
        ) : (
          <span>GitHub link pending</span>
        )}

        {project.liveDemoLink ? (
          <a href={project.liveDemoLink} target="_blank" rel="noreferrer">
            <ExternalLink size={16} /> Live demo
          </a>
        ) : (
          <span>Demo pending</span>
        )}
      </div>
    </article>
  );
}
