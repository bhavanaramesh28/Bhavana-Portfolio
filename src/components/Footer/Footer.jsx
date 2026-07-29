import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-left">
          <h3>Bhavana Ramesh</h3>
          <p>Frontend Web Developer</p>
        </div>

        <div className="footer-center">
          <p>
            © {new Date().getFullYear()} Bhavana Ramesh.
            <br />
            All Rights Reserved.
          </p>
        </div>

        <div className="footer-right">

          <a
            href="https://github.com/bhavanaramesh28"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/bhavana-ramesh-63016b3a3"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:yourmail@example.com">
            Email
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;