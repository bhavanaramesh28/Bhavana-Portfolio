import "./Hero.css";

function Hero() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 17) {
    greeting = "Good Afternoon";
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-container">

        <div className="hero-content">

          <h1>
            {greeting},
            <br />
            I'm <span>Bhavana Ramesh</span>
          </h1>

          <h3>Frontend Web Developer</h3>

          <p>
            I create modern, responsive, and user-friendly websites using
            HTML, CSS, JavaScript, and React. I enjoy turning ideas into
            beautiful web experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>

            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>

        </div>

        <div className="hero-image">
          <img src={photo.jpeg} alt="Bhavana Ramesh" />
        </div>

      </div>
    </section>
  );
}

export default Hero;