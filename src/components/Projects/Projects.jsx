import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Weather App",
    image: "/WeatherApps logo.jpg",
    description:
      "A real-time weather application built using the OpenWeather API. It provides current weather conditions and forecasts in a simple, user-friendly interface.",
    technologies: ["React", "API"],
    github: "https://github.com/bhavanaramesh28",
    demo: "#",
  },
  {
    id: 2,
    title: "Marvel Spider-Man",
    image: "/Spider man.jpeg",
    description:
      "An action-adventure game inspired by Marvel's Spider-Man featuring open-world exploration, smooth gameplay, and an engaging storyline.",
    technologies: ["React", "JavaScript"],
    github: "https://github.com/bhavanaramesh28",
    demo: "#",
  },
  {
    id: 3,
    title: "Health Care",
    image: "/Health care.jpeg",
    description:
      "A healthcare application that helps users manage appointments, medication reminders, and health records with an easy-to-use interface.",
    technologies: ["React", "API"],
    github: "https://github.com/bhavanaramesh28",
    demo: "#",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">My Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tags">
                {project.technologies.map((tech, index) => (
                  <span className="tag" key={index}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-buttons">
                <a
                  href={project.demo}
                  className="btn primary-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  className="btn secondary-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;