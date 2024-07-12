import React from "react";
import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import movie from "../../assets/movies-recommender-pic.jpg";
import anotherOne from "../../assets/anotherOne.jpg";
import blog from "../../assets/blog-app.jpg";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {/* <a href="https://github.com/Samratnitesh/Movies-Recommender-System" target='_blank'>
            <img src={movie} alt="movie-recommender-system-icon" />
            <h3>Movies Recommender System</h3>
            </a> */}
        <ProjectCard
          src={movie}
          link="https://github.com/Samratnitesh/Movies-Recommender-System"
          h3="Movies Recommender System"
          p="Watch movies on recommendation"
        />
        <ProjectCard
          src={blog}
          link="https://github.com/Samratnitesh/Write-Wave"
          h3="Write Wave"
          p="A Blog Web App"
        />
        <ProjectCard
          src={anotherOne}
          link="https://github.com/Samratnitesh/Automated-Image-Caption-Generator"
          h3="Image Caption Generator"
          p="Caption your Image"
        />
      </div>
    </section>
  );
}

export default Projects;
