import React from "react";
import Navbar from "./Navbar";
import "../styling/projects.css";

// Define your projects data
const projects = [
  {
    title: "Freightx",
    description: "This was an application that would be used by users to book naval trips and cargo trasportation through an online service",
    imageUrl: "https://i.pinimg.com/736x/ef/d8/c7/efd8c7a1c24307dcee8f113359d01284.jpg",
    projectLink: "https://github.com/Kamau-sam/FREIGHTX"
  },
  {
    title: "Blaze",
    description: "This was an online food ordering serveice that would allow the user to place orders as well as track them.",
    imageUrl: "https://i.pinimg.com/736x/3c/b7/a0/3cb7a0735c64e22ae94e4115a9d92b4c.jpg",
    projectLink: "https://blaze-client.onrender.com/"
  }
];

export default function Projects() {
  return (
    <div id="projects">
      <Navbar />
      <h1>PROJECTS</h1>
      <div id="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.imageUrl} alt={project.title} />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.projectLink} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}