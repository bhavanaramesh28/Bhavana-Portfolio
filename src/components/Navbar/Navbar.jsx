import { useEffect, useState } from "react";
import "./Navbar.css";
 
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
 
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
 
  const [time, setTime] = useState(
    () => new Date().toLocaleTimeString()
  );
 
  // Live clock
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
 
    return () => clearInterval(timer);
  }, []);
 
  // Dark/light theme
  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
 
  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  }
 
  function toggleMenu() {
    setMenuOpen((current) => !current);
  }
 
  return (
    <header className="site-header">
      <nav className="nav-section">

 
        <div className="logo">Bhavana Ramesh</div>
 
        <ul className={`nav-link ${menuOpen ? "open" : ""}`}>
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
 
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
 
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
 
      </nav>
    </header>
  );
}
 
export default Navbar;