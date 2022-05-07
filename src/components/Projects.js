import React from "react";
import ProjectCard from "./ProjectCard";
import { projectData } from "../data";

function Projects() {
  return (
    <section className="sub-section-alternative" id="projects">
      <h2>Projects</h2>
      <div className="project-container">
        {projectData.map((project) => {
          return (
            <ProjectCard
              key={project.title}
              title={project.title}
              imgSrc={project.imgSrc}
              alt={project.alt}
              description={project.description}
              type={project.type}
              languages={project.languages}
              tech={project.tech}
              site={project.site}
              repo={project.repo}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
