import "./About.css";


function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">

        <div className="about-image">
          <img
            src={photo.jpeg}
            alt="Bhavana Ramesh"
          />
        </div>

        <div className="about-content">
          <h2>About Me</h2>

          <p>
            Hello! I'm <strong>Bhavana Ramesh</strong>, a passionate
            <strong> Front-End Web Developer</strong> from Bangalore,
            India.
          </p>

          <p>
            I enjoy creating modern, responsive, and user-friendly
            websites using HTML, CSS, JavaScript, and React. I love
            learning new technologies and improving my skills through
            real-world projects.
          </p>

          <p>
            Currently, I'm pursuing my Bachelor's degree in Computer
            Science Engineering with Artificial Intelligence and Machine
            Learning while building projects that strengthen my web
            development skills.
          </p>

          <div className="about-info">
            <div>
              <h3>Location</h3>
              <p>Bangalore, India</p>
            </div>

            <div>
              <h3>Email</h3>
              <p>bhavanaramesh@example.com</p>
            </div>

            <div>
              <h3>Experience</h3>
              <p>Frontend Projects</p>
            </div>

            <div>
              <h3>Languages</h3>
              <p>English, Kannada</p>
            </div>
          </div>

          <a
            href="/resume.pdf"
            className="download-btn"
            download
          >
            Download Resume
          </a>

        </div>

      </div>
    </section>
  );
}

export default About;