import { Github } from "lucide-react";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const Icon = project.icon;
  const featuredSkills = project.keySkills.slice(0, 3);

  return (
    <article className="project-card">
      <div className="project-card__header">
        <div className="project-card__icon" aria-hidden="true">
          <Icon size={22} strokeWidth={1.8} />
        </div>
      </div>

      <p className="eyebrow">{project.category}</p>
      <h3>{project.title}</h3>
      <p className="project-card__summary">{project.shortDescription}</p>

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
        <ul>
          {featuredSkills.map((skill) => (
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

      </div>
    </article>
  );
}
