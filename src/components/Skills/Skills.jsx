import "./Skills.css";

function Skills() {
  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Python", level: 75 },
    { name: "Git & GitHub", level: 80 },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">

        <h2>My Skills</h2>

        <p className="skills-subtitle">
          Here are some technologies and tools I use to build modern web applications.
        </p>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>

              <div className="skill-header">
                <h3>{skill.name}</h3>
                <span>{skill.level}%</span>
              </div>

              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;