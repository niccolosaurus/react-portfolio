import React from "react";

function ProjectCard(props) {
  return (
    <div className="project-card">
      <img className="project-image" src={props.imgSrc} alt={props.alt} />
      <h3>{props.title}</h3>
      <p className="subtext">{props.description}</p>
      <p className="subtext">{props.type}</p>
      <p className="subtext">{props.languages}</p>
      <p className="subtext">{props.tech}</p>
      <p className="subtext">
        <a className="project-link" href={props.site}>
          View here
        </a>
      </p>
      <p className="subtext">
        <a className="project-link" href={props.repo}>
          GitHub Repo
        </a>
      </p>
    </div>
  );
}

export default ProjectCard;
