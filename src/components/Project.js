import React from "react";

function Project(props) {
  const { title, image, deployedLink, githubLink } = props;

  return (
    <div className="project">
      <h2>{title}</h2>
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} />
      </a>
      <div className="links">
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          View
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Project;
