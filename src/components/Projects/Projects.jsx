import { useState } from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Weather App",
      description:
        "A real-time weather application built using React and OpenWeather API.",
      image: "/WeatherApps-logo.jpg",
      category: "web",
      tech: ["React", "API", "CSS"],
      github: "https://github.com/bhavanaramesh28",
      demo: "#",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing projects and skills.",
      image: "/WeatherApps-logo.jpg",
      category: "design",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/bhavanaramesh28",
      demo: "#",
    },
    {
      id: 3,
      title: "Todo App",
      description:
        "A simple task management application using React Hooks.",
      image: "/WeatherApps-logo.jpg",
      category: "web",
      tech: ["React", "JavaScript"],
      github: "https://github.com/bhavanaramesh28",
      demo: "#",
    },
  ];

  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">

        <h2>My Projects</h2>

        <p className="projects-subtitle">
          Here are some of the projects I've worked on.
        </p>

        <div className="filter-buttons">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </button>

          <button
            className={filter === "web" ? "active" : ""}
            onClick={() => setFilter("web")}
          >
            Web
          </button>

          <button
            className={filter === "design" ? "active" : ""}
            onClick={() => setFilter("design")}
          >
            Design
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>

              <img
                src="WeatherApps logo.jpg"
                alt="project.title"
              />

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.tech.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>

                <div className="project-buttons">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;