import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid() {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <div key={project.title}>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}
