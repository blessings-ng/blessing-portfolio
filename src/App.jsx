import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import HireMe from "./components/HireMe";
import DisplayModeToggle from "./components/DisplayModeToggle";
import "./App.css";
import "./assets/css/footer.css";

const THEME_KEY = "portfolio-theme";

function getPreferredTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "light" || stored === "dark" || stored === "blue" || stored === "system") {
    return stored;
  }
  return "system";
}

function applyTheme(theme) {
  const root = document.documentElement;
  root.classList.remove("dark", "blue-theme");
  if (theme === "dark") {
    root.classList.add("dark");
  } else if (theme === "blue") {
    root.classList.add("blue-theme");
  } else if (theme === "system") {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (isDark) {
      root.classList.add("dark");
    }
  }
}

export default function App() {
  const [theme, setTheme] = useState(getPreferredTheme);

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem(THEME_KEY, theme);

    function handleSystemChange() {
      if (theme === "system") {
        applyTheme("system");
      }
    }

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    if (mq.addEventListener) {
      mq.addEventListener("change", handleSystemChange);
    } else if (mq.addListener) {
      mq.addListener(handleSystemChange);
    }

    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener("change", handleSystemChange);
      } else if (mq.removeListener) {
        mq.removeListener(handleSystemChange);
      }
    };
  }, [theme]);

  const [isNavOpen, setNavOpen] = React.useState(false);

  const toggleNav = () => setNavOpen((o) => !o);
  const closeNav = () => setNavOpen(false);

  React.useEffect(() => {
    const handleRouteChange = () => closeNav();
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <DisplayModeToggle theme={theme} setTheme={setTheme} />

        <nav className="main-nav" aria-label="Primary navigation">
          <div className="nav-container">
            <Link to="/" className="logo" onClick={closeNav}>
              IB_NGOZI
            </Link>

            <button
              className={`hamburger ${isNavOpen ? "open" : ""}`}
              onClick={toggleNav}
              aria-label={isNavOpen ? "Close menu" : "Open menu"}
              aria-expanded={isNavOpen}
              aria-controls="primary-navigation"
            >
              <span />
              <span />
              <span />
            </button>

            <ul
              id="primary-navigation"
              className={`nav-links ${isNavOpen ? "open" : ""}`}
              role="menu"
            >
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/projects", label: "Projects" },
                { to: "/contact", label: "Contact" },
                { to: "/hireMe", label: "HireMe" },
              ].map(({ to, label }) => (
                <li key={to} role="none">
                  <NavLink
                    to={to}
                    role="menuitem"
                    className={({ isActive }) => (isActive ? "active" : undefined)}
                    onClick={closeNav}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <main role="main" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/hireMe" element={<HireMe />} />
            <Route
              path="*"
              element={
                <section style={{ padding: "6rem 1rem", textAlign: "center" }}>
                  <h2>404 - Page not found</h2>
                  <p>
                    Sorry, that page doesn’t exist.
                    <br />
                    <Link to="/">Go back home</Link>
                  </p>
                </section>
              }
            />
          </Routes>
        </main>

        <footer className="footer" role="contentinfo">
        <div className="footer-container">
         <div className="footer-top">
         <div className="footer-brand">
        <h3>Blessing Igwe</h3>
        <p>
          Creative Frontend Developer passionate about building beautiful, fast, and user-focused web experiences.
        </p>
      </div>

      <div className="footer-links">

        <div>
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/about">About Me</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
        </div>

      <div className="footer-legal">
        <h4>Legal</h4>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Cookie Settings</a></li>
        </ul>
      </div>

      <div className="footer-social">
        <h4>Connect</h4>
        <div className="social-icons">
          <a href="https://github.com/blessings-ng" target="_blank" aria-label="GitHub"><i className="fab fa-github"></i></a>
          <a href="https://linkedin.com/in/blessingigwe" target="_blank" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://wa.me/2349132893843" target="_blank" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
          <a href="https://instagram.com/blessingsigwe_" target="_blank" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="https://twitter.com/_iambclassic" target="_blank" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="mailto:blessmiss1@gmail.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© {new Date().getFullYear()} Blessing Igwe. All rights reserved.</p>
    </div>
  </div>
</footer>


      </BrowserRouter>
    </React.StrictMode>
  );
}