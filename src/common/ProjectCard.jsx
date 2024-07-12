import React from "react";

function ProjectCard({src, link, h3, p}) {
  return (
    <a
      href={link}
      target="_blank"
    >
      <img src={src} alt="movie-recommender-system-icon" />
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default ProjectCard;
