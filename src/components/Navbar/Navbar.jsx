import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="navbar-container">
      <nav className="navbar">

        <div className="logo">
          <h2>Bhavana Ramesh</h2>
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <a href="#hero" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>

          <li>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>

        <div className="nav-buttons">

          <button
            className="theme-btn"
            onClick={toggleTheme}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

      </nav>
    </header>
  );
}

export default Navbar;